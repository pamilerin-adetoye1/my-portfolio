# Netlify Cheers Counter Setup Guide

## Overview

Your cheer counter is now powered by a Netlify serverless function that stores the count persistently using GitHub Gists.

## Setup Instructions

### Step 1: Create a GitHub Gist

1. Go to [https://gist.github.com](https://gist.github.com)
2. Create a new gist with filename `cheers.json`
3. Add this content:

```json
{
  "count": 1240
}
```

4. Click "Create public gist"
5. Copy the **Gist ID** from the URL (the long alphanumeric string at the end)

### Step 2: Add Environment Variables to Netlify

1. Go to your Netlify site settings
2. Navigate to: **Site settings > Build & deploy > Environment**
3. Click "Add a new variable"
4. Add these two variables:
   - **Key:** `GITHUB_TOKEN`
     **Value:** Your GitHub personal access token (create at https://github.com/settings/tokens)
     - Need scopes: `gist`
   - **Key:** `CHEERS_GIST_ID`
     **Value:** The Gist ID from Step 1

### Step 3: Create GitHub Personal Access Token

1. Go to https://github.com/settings/tokens/new
2. Select these scopes:
   - ✓ `gist`
3. Click "Generate token"
4. Copy the token (you'll only see it once!)
5. Paste it in Netlify environment variables

### Step 4: Deploy

Push your changes to GitHub - Netlify will automatically deploy the new function.

## How It Works

- **GET** `/.netlify/functions/cheers` - Returns the current cheer count
- **POST** `/.netlify/functions/cheers` - Increments the counter by 1

## Features

✓ Persists across page refreshes
✓ Shared across all devices
✓ Real-time updates
✓ CORS enabled for cross-origin requests
✓ Fallback values if GitHub is unavailable

## Troubleshooting

### Function not working?

- Check Netlify logs: Site > Deploys > Select latest > Functions
- Verify environment variables are set correctly
- Make sure GitHub token has `gist` scope

### Counter not updating?

- Check browser console for errors (F12)
- Verify GitHub token hasn't expired
- Check Gist is public

## API Usage (From Frontend)

```javascript
// Get current count
fetch("/.netlify/functions/cheers")
  .then((r) => r.json())
  .then((data) => console.log(data.count));

// Increment count
fetch("/.netlify/functions/cheers", { method: "POST" })
  .then((r) => r.json())
  .then((data) => console.log(data.count));
```
