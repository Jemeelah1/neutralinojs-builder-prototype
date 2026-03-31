module.exports = (options) => {
  console.log("📦 Generating Debian package...");

  if (options.ia32) {
    console.log("➡️ Target architecture: ia32");
  }

  console.log("⚙️ Packaging app...");

  setTimeout(() => {
    console.log("✅ Debian package generated successfully!");
  }, 1000);
};
