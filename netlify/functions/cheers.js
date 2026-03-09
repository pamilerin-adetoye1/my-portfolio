const { Octokit } = require("@octokit/rest");

// Using GitHub as a simple persistent storage via Gist
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const GIST_ID = process.env.CHEERS_GIST_ID;

async function getCheerCount() {
  try {
    if (!GIST_ID || !process.env.GITHUB_TOKEN) {
      console.warn(
        "GitHub token or Gist ID not configured, using fallback count",
      );
      return 1240;
    }

    const gist = await octokit.gists.get({
      gist_id: GIST_ID,
    });

    const file = gist.data.files["cheers.json"];
    if (file) {
      const data = JSON.parse(file.content);
      return data.count || 0;
    }
    return 0;
  } catch (error) {
    console.error("Error fetching cheer count:", error);
    return 1240; // Fallback
  }
}

async function updateCheerCount(newCount) {
  try {
    if (!GIST_ID || !process.env.GITHUB_TOKEN) {
      console.warn("GitHub token or Gist ID not configured");
      return newCount;
    }

    await octokit.gists.update({
      gist_id: GIST_ID,
      files: {
        "cheers.json": {
          content: JSON.stringify({ count: newCount }, null, 2),
        },
      },
    });

    return newCount;
  } catch (error) {
    console.error("Error updating cheer count:", error);
    return newCount;
  }
}

exports.handler = async (event) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
    };
  }

  try {
    if (event.httpMethod === "GET") {
      // Get current cheer count
      const count = await getCheerCount();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ count }),
      };
    }

    if (event.httpMethod === "POST") {
      // Increment cheer count
      const currentCount = await getCheerCount();
      const newCount = currentCount + 1;
      await updateCheerCount(newCount);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ count: newCount }),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  } catch (error) {
    console.error("Cheers function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
