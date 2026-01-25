const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "public", "profile");
const outputDir = path.join(__dirname, "public", "profile", "optimized");

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const fileWithoutExt = path.parse(file).name;

      // Skip if it's already in the optimized folder
      if (inputPath.includes("optimized")) continue;

      // Generate WebP version
      const webpPath = path.join(outputDir, `${fileWithoutExt}.webp`);

      await sharp(inputPath)
        .resize(400, 400, {
          fit: "cover",
          position: "center",
        })
        .webp({ quality: 80 })
        .toFile(webpPath);

      console.log(`✓ Optimized: ${file} → ${fileWithoutExt}.webp`);
    }

    console.log("\n✅ All images optimized successfully!");
    console.log(`📁 Optimized images saved to: ${outputDir}`);
    console.log("\n📝 Next steps:");
    console.log(
      "1. Update image paths in data/team.ts to use /profile/optimized/*.webp",
    );
    console.log("2. Rebuild your Next.js app: npm run build");
    console.log("3. Redeploy to Vercel");
  } catch (error) {
    console.error("Error optimizing images:", error);
  }
}

optimizeImages();
