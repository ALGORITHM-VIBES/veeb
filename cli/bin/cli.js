#!/usr/bin/env node
const path = require('path');
const { program } = require('commander');
const package = require(path.resolve(__dirname, '../package.json'));
const commandHandler = require(path.resolve(__dirname, './lib/commandHandler'));

const cliName = package.name.split('@')[1].split('/')[0];

program
  .name(cliName)
  .description(package.description)
  .version(package.version);

commandHandler(program);

program.parse();