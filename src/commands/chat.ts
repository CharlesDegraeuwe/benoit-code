import { streamText } from "ai";
import * as readline from "node:readline/promises";
import {model} from "../provider/deepseek.js";


export async function chat() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    while (true) {
        const input = await rl.question("> ");
        if (input === "exit") break;

        const result = streamText({
            model,
            prompt: input,
        });

        for await (const chunk of result.textStream) {
            process.stdout.write(chunk);
        }
        process.stdout.write("\n\n");
    }

    rl.close();
}