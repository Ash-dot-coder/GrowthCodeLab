// import os from "os";

// // 🖥️ Get the OS platform (e.g., 'win32', 'linux')
// console.log("Plateform: ", os.platform());

// // 🧠 Get the architecture (e.g., 'x64')
// console.log("Architecture: ", os.arch());

// // ⚙️ Get information about each CPU core
// console.log("CPU Info: ", os.cpus());

// // 🏠 Get the host name of the OS
// console.log("Hostname: ", os.hostname());

// // 🏡 Get the home directory of the current user
// console.log("Home Directory: ", os.homedir());

// // 🌐 Get details about the network interfaces
// console.log("Network Interfaces: ", os.networkInterfaces());

// // 📉 Get the free system memory (in bytes)
// console.log("Free Memory: ", os.freemem());

// // 📊 Get the total system memory (in bytes)
// console.log("Total Memory: ", os.totalmem());

// Using Chalk ORA:
import os from "os";
import chalk from "chalk";
import ora from "ora";

const spinner = ora("Fetching system info...").start();

setTimeout(() => {
  spinner.stop();

  console.log(chalk.blue.bold("\n💻 System Information\n"));

  console.log(chalk.green("🖥️ Platform: "), chalk.white(os.platform()));
  console.log(chalk.green("🧠 Architecture: "), chalk.white(os.arch()));
  console.log(chalk.green("⚙️ CPU Cores: "), chalk.white(os.cpus().length));
  console.log(chalk.green("🏠 Hostname: "), chalk.white(os.hostname()));
  console.log(chalk.green("🏡 Home Directory: "), chalk.white(os.homedir()));

  const network = os.networkInterfaces();
  console.log(chalk.green("🌐 Network Interfaces:"));
  for (let key in network) {
    console.log(chalk.yellow(`  ${key}:`));
    network[key].forEach((net) => {
      console.log(`    - ${net.family} (${net.address})`);
    });
  }

  console.log(
    chalk.green("📉 Free Memory: "),
    chalk.white((os.freemem() / 1024 / 1024).toFixed(2) + " MB")
  );
  console.log(
    chalk.green("📊 Total Memory: "),
    chalk.white((os.totalmem() / 1024 / 1024).toFixed(2) + " MB")
  );

  console.log(chalk.blue.bold("\n✅ Done!\n"));
}, 1500);
