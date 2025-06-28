import { name } from "ejs";
import { join } from "path";

const aboutController = (req, res) => {
  // 🧾 Option 1: Send raw HTML file (not used when using EJS)
  // res.sendFile(join(process.cwd(), "views", "about.html"));

  // 🔁 Option 2: Send simple text response (for quick testing)
  // res.send("About Page");

  // 🔃 Option 3: EJS Templating Example 👇
  // res.render("about", { desc: "PAGE" }); // ✅ Passing dynamic data to EJS
  //
  // 📝 In views/about.ejs, you should write:
  // <p>This is ABOUT PAGE <%= desc %>🥂</p>

  // ✅ Actual response using EJS (static for now)
  res.render("about");
  console.log("📍 Current Page: About ✅");
};

export { aboutController };
