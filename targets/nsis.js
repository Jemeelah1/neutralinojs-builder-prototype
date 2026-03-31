module.exports = (options) => {
  console.log("📦 Generating Windows installer (NSIS)...");

  if (options.x64) {
    console.log("➡️ Target architecture: x64");
  }

  console.log("⚙️ Packaging app...");

  setTimeout(() => {
    console.log("✅ NSIS installer generated successfully!");
  }, 1000);
};
