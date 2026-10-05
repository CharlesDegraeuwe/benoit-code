import { generateText, tool, stepCountIs } from "ai";
import { deepseek } from "@ai-sdk/deepseek";
import { z } from "zod";
import { readFile } from "node:fs/promises";

const readFileTool = tool({
    description: "Read a file from disk",
    inputSchema: z.object({ path: z.string() }),
    execute: async ({ path }) => readFile(path, "utf8"),
});

const result = await generateText({
    model: deepseek("deepseek-chat"),
    tools: { read_file: readFileTool },
    stopWhen: stepCountIs(20),
    prompt: "Lees package.json en vat het samen",
});
console.log(result.text);