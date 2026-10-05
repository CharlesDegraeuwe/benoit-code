import { Command } from 'commander';
import "dotenv/config"
import {chat} from "./commands/chat.js";
const program = new Command();
program
    .name('benoit-code')
    .description('A powerful CLI tool built with TypeScript')
    .version('1.0.0');

program
    .command("chat")
    .description("Start een gesprek")
    .action(chat);

program.parse(process.argv);

