// 📦 NPM Project Entry File
// This script displays metadata from package.json dynamically
// Useful for CLI tools or just understanding how to read files in Node.js

import fs from "fs";

// Read and parse package.json
const data = fs.readFileSync("package.json", "utf-8");
const pkg = JSON.parse(data);

console.log("\n📦 Project Metadata from package.json\n");

console.log(`🧾 Name        : ${pkg.name}`);
console.log(`📌 Version     : ${pkg.version}`);
console.log(`📝 Description : ${pkg.description || "Not provided"}`);
console.log(`👤 Author      : ${pkg.author || "Not provided"}`);

// Dependencies
console.log(`\n📦 Dependencies:`);
if (pkg.dependencies && Object.keys(pkg.dependencies).length > 0) {
  Object.entries(pkg.dependencies).forEach(([dep, version]) => {
    console.log(`   - ${dep} : ${version}`);
  });
} else {
  console.log("   No dependencies installed.");
}

console.log("\n✅ Done!\n");
