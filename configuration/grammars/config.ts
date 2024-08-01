import { SQFItemConfig } from "./sqf.namespace";
import { configs as sqfCommandConfigs } from "./syntaxes/biki.commands.syntax";
import { configs as bikiFunctions } from "./syntaxes/biki.functions.syntax";
import { configs as kiskaFunctionConfigs } from "./syntaxes/kiska.syntax";
import { magicVariableSyntaxes } from "./syntaxes/magicVariables.syntax";
import { scriptPreprocessorCommands } from "./syntaxes/preprocessor.syntax";

export function getSqfItemConfigs(): SQFItemConfig[] {
    return [
        // Place any new syntax imports here
        sqfCommandConfigs,
        bikiFunctions,
        scriptPreprocessorCommands,
        magicVariableSyntaxes,
        kiskaFunctionConfigs,
    ].flat();
}
