import { Command } from 'commander';
const program = new Command();
program
    .name('benoit-code')
    .description('A powerful CLI tool built with TypeScript')
    .version('1.0.0');

program.parse(process.argv);