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
    <meta charset="UTF-8" />
    <title>Example</title>
    <meta property="og:title" content="Example Title" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://example.com/image.png" />
    <meta property="og:image" content="https://example.com/image.png" />
    <meta property="fc:frame:image" content="https://example.com/image.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
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
