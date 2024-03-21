#!/usr/bin/env node
const path = require('path');
const { program } = require('commander');
const package = require(path.resolve(__dirname, '../package.json'));
const commandHandler = require(path.resolve(__dirname, './lib/commandHandler'));

const cliName = package.name.replace('\/', '-').split('@')[1];

program
  .name(cliName)
  .description(package.description)
  .version(package.version);

commandHandler(program);

program.parse();