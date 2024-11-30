const express = require("express");
const app = express();
const port = 3001;

// Serve static files
app.use(express.static("public"));

// Main endpoint that serves the donation page
app.get("/donate", (req, res) => {
  res.send(`
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Donate Page</title>

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Donate to Our Cause">
  <meta name="twitter:description" content="Support our mission by making a donation. Every contribution counts!">
  <meta name="twitter:image" content="https://nami-ai.vercel.app/logo.jpg">
  <meta name="twitter:url" content="https://testing-iframes.up.railway.app/donate">
    
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Donate to Our Cause">
  <meta property="og:description" content="Support our mission by making a donation. Every contribution counts!">
  <meta property="og:image" content="https://nami-ai.vercel.app/logo.jpg">
  <meta property="og:url" content="https://testing-iframes.up.railway.app/donate">
  <meta property="og:type" content="website">

  <!-- Additional Meta -->
  <link rel="icon" href="/favicon.ico">
</head>
<body>
  <h1>Donate to Our Cause</h1>
  <p>Thank you for considering a donation. Your support helps us achieve our goals.</p>
  <img src="https://nami-ai.vercel.app/logo.jpg" alt="Donate Banner" />
</body>
</html>

  `);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/donate`);
});
