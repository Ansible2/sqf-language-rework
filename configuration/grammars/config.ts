import { SQFItemConfig } from "./sqf.namespace";
import { configs as sqfCommandConfigs } from "./syntaxes/commands.syntax";
import { scriptPreprocessorCommands } from "./syntaxes/preprocessor.syntax";

export function getSqfItemConfigs(): SQFItemConfig[] {
    return [
        // Place any new syntax imports here
        ...sqfCommandConfigs,
        ...scriptPreprocessorCommands,
    ];
}
