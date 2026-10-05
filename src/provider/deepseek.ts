import { createDeepSeek } from "@ai-sdk/deepseek";
import type { LanguageModel } from "ai";
import {storage} from "../session/storage.js";

const deepseek = createDeepSeek({
    apiKey: process.env.DEEPSEEK_API_KEY ?? "",
});

export const model: LanguageModel = deepseek(storage.model);