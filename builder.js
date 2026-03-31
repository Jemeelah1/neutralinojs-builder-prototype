#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

program
  .name("builder")
  .description("Neutralinojs Builder Prototype")
  .argument("<target>", "build target (nsis, deb)")
  .option("--x64", "build for x64")
  .option("--ia32", "build for ia32")
  .action((target, options) => {
    console.log(`Building for target: ${target}`);

    try {
      const buildTarget = require(`./targets/${target}.js`);
      buildTarget(options);
    } catch (err) {
      console.error("Unsupported target:", target);
    }
  });

program.parse();
