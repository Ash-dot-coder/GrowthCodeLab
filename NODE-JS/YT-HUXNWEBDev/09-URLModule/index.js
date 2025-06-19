import { URL } from "url";

// 🌐 Create a new URL object
const myUrl = new URL("https://github.com:9090/Ash-dot-coder/GrowthCodeLab/tree/code/NODE-JS/#YT-HUXNWEBDev")

// 🔗 Fragment (after #)
console.log("Hash: ", myUrl.hash); // #YT-HUXNWEBDev

// 🧩 Host (hostname:port)
console.log("Host: ", myUrl.host); // github.com:9090

// 🌍 Hostname (without port)
console.log("Hostname: ", myUrl.hostname);  // github.com

// 📎 Full href
console.log("Href: ", myUrl.href);

// 🧱 Path after the domain
console.log("Pathname: ", myUrl.pathname); // /Ash-dot-coder/GrowthCodeLab/tree/code/NODE-JS/

// 🧭 Port used (from URL)
console.log("Port: ", myUrl.port); // 9090

// 🛰️ Protocol (http or https, etc.)
console.log("Protocol: ", myUrl.protocol); // https:

// 🔍 Query string (starts with ? if exists)
console.log("Search (query): ", myUrl.search); // (empty in this case)

// 🧮 SearchParams object (can be used to get individual query values)
console.log("SearchParams: ", myUrl.searchParams); // URLSearchParams {}


// Both works the same 👇🏻

// 🪞 Convert back to string
console.log("tO String: ", myUrl.toString());
// 📤 Convert to JSON (returns href)
console.log("To JSON: ", myUrl.toJSON());


    