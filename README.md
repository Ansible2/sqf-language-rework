# SQF Langauge Rework

A [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) (LSP) implementation for Arma 3's SQF and configuration languages.

While this project began its life as a reworking of [Armitxes VSCode_SQF](https://github.com/Armitxes/VSCode_SQF) it has morphed into essentially a ground up rewrite of it. About the only thing leftover from that project at this point are the [language configs](configuration/language-configs) and the [grammar configs](configuration/grammars/) but even these continue to change.

## Features

-   Hover
-   Completion with description
-   Syntax Highlighting

I have no goals to add linting capability. I just want to make working on SQF projects more visually tolerable and to make the language server implementation as easy to understand and extend as possible.

## Local Development

### Installation

Simply run `npm install` at the root level. It will install all dependencies in the `/extension` folder too.

### Running Locally

1. Navigate to the Run and Debug panel in Visual Studio Code.
1. Select the `Launch Client` option.

The project will build and then a new Visual Studio Code window will open running the built extension. Create a `.sqf` file or open an existing project.

## Syntaxes

The [syntaxes](/configuration/grammars/syntaxes) govern what specific language tokens appear with their documentation. If a new Arma command is added for example, the [biki.commands.syntax.ts](/configuration/grammars/syntaxes/biki.commands.syntax.ts) would need to be updated to have it appear as a command in the editor with documentation.

This updating is intended to be automated. The current pattern is that seed files are retrieved and placed into the [/Parsers/Seed Files](/Parsers/Seed%20Files/) folder. These are then parsed by a respective implementation of the `DocParser` interface in the [SQFParser.namespace.ts](/Parsers/SQFParser.namespace.ts).

There are a number of `package.json` commands to run these parser implementations. The structure of the commands is that `parse:*` will only parse the current seed file that is on the machine. `update:*` will pull down the latest seed file and then parse it. Ultimately both will result in a syntax file update in the aforementioned `syntax` folder.

## Grammars

The [grammar files](/configuration/grammars/) will determine how the syntax highlighting is produced. Any errors in that will be regex issues in the `.grammar` files.

## Build Extension

1. After installation, run `npm run vsce`.
1. Navigate to the `/.out` folder. There will be a file generated called `sqf-language-rework-{version}.vsix`.

You can now distribute that `.vsix` file as the extension.
