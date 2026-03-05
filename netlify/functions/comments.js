exports.handler = async (event) => {
  const token = process.env.NETLIFY_ACCESS_TOKEN;
  const siteId = process.env.NETLIFY_SITE_ID;
  const formName = process.env.NETLIFY_FORM_NAME || "mentee-comment";
  const perPage = Number(event.queryStringParameters?.per_page || 20);
  try {
    if (!token || !siteId) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error:
            "Missing NETLIFY_ACCESS_TOKEN or NETLIFY_SITE_ID env vars. Configure these in Netlify UI.",
        }),
      };
    }
    const formsRes = await fetch(
      `https://api.netlify.com/api/v1/sites/${siteId}/forms`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (!formsRes.ok) {
      return {
        statusCode: formsRes.status,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Unable to list forms" }),
      };
    }
    const forms = await formsRes.json();
    const form = forms.find((f) => f.name === formName);
    if (!form) {
      return {
        statusCode: 404,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({ error: `Form '${formName}' not found` }),
      };
    }
    const subsRes = await fetch(
      `https://api.netlify.com/api/v1/forms/${form.id}/submissions?per_page=${perPage}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (!subsRes.ok) {
      return {
        statusCode: subsRes.status,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Unable to list submissions" }),
      };
    }
    const subs = await subsRes.json();
    const mapped = subs.map((s) => ({
      id: s.id,
      created_at: s.created_at,
      name: s.data?.name || s.name || "Anonymous",
      profession: s.data?.profession || "",
      email: s.data?.email || "",
      message: s.data?.message || "",
      attachments: [],
    }));
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ submissions: mapped }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Server error", detail: String(e) }),
    };
  }
};
