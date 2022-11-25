import * as fs from "fs";
import * as fse from "fs-extra";
import * as fsPromises from "fs/promises";
import * as jsonFile from "jsonfile";
import { BuildContext, BuildPaths } from "./build-context";
import { sqfGrammar } from "../configuration/grammars/sqf.grammar";

import * as esbuild from "esbuild";

// "vscode:prepublish": "npm run esbuild-base -- --minify",
// "esbuild-base": "esbuild ./src/extension.ts --bundle --outfile=out/main.js --external:vscode --format=cjs --platform=node",
// "esbuild": "npm run esbuild-base -- --sourcemap",
// "esbuild-watch": "npm run esbuild-base -- --sourcemap --watch",
// "test-compile": "tsc -p ./"

async function doEsbuild() {
    console.log("Starting on esbuild...");
    try {
        await esbuild.build({
            entryPoints: [
                "extension/server/src/server.ts",
                "extension/client/src/extension.ts",
            ],
            bundle: true,
			outdir: ".out",
            external: ["vscode"],
            platform: "node",
            format: "cjs",
            sourcemap: true,
            minify: true,
        });
    } catch (error) {
        console.log("esbuild had an error...");
        console.error(error);
        process.exit(1);
    }

    console.log("esbuild is complete!");
}

const copyFileTo = (origin: string, destination: string): Promise<void> => {
    console.log(`Copying [${origin}] to [${destination}]`);

    return fsPromises.copyFile(origin, destination);
};

const copyDirectoryTo = async (
    origin: string,
    destination: string
): Promise<void> => {
    console.log(`Copying Directory [${origin}] to [${destination}]`);

    await fse.emptyDir(destination);
    fse.copy(origin, destination, { overwrite: true });
};

const createDirectory = (path: string): void => {
    const directoryExitsts: boolean = fs.existsSync(path);
    if (!directoryExitsts) {
        console.log(`Directory at [${path}] does not exist. Creating...`);
        fs.mkdirSync(path);
    }
};

const build = async () => {
    console.log("\nExecuting build process...");
    await doEsbuild();

    const inPaths: BuildPaths = BuildContext.in;
    const outPaths: BuildPaths = BuildContext.out;

    /* ----------------------------------------------------------------------------
		Create .out Directories
    ---------------------------------------------------------------------------- */
    createDirectory(outPaths.directories.top);
    createDirectory(outPaths.directories.configuration);
    createDirectory(outPaths.directories.languageConfigs);
    createDirectory(outPaths.directories.grammars);
    createDirectory(outPaths.directories.extension);
    createDirectory(outPaths.directories.client);
    createDirectory(outPaths.directories.server);

    // empty space
    console.log();

    /* ----------------------------------------------------------------------------
		copy configuration.json's to .out folder
    ---------------------------------------------------------------------------- */
    const copyExtConfig: Promise<void> = copyFileTo(
        inPaths.files.extLanguageConfig,
        outPaths.files.extLanguageConfig
    );
    const copySqfConfig: Promise<void> = copyFileTo(
        inPaths.files.sqfLanguageConfig,
        outPaths.files.sqfLanguageConfig
    );

    // TODO: write grammars to json files in grammar folder
    /* ----------------------------------------------------------------------------
		Compile grammar files
    ---------------------------------------------------------------------------- */
    console.log("Writing Grammar files...");
    const jsonWriteOptions: jsonFile.JFWriteOptions = {
        spaces: 4,
        EOL: "\r\n",
    };
    const writeSqfGrammar: Promise<void> = jsonFile.writeFile(
        outPaths.files.sqfGrammar,
        sqfGrammar,
        jsonWriteOptions
    );
    // const writeExtGrammar: Promise<void> = jsonFile.writeFile(outPaths.files.extGrammar, extGrammar);

    /* ----------------------------------------------------------------------------
		copy main static files
    ---------------------------------------------------------------------------- */
    // const copyPackageJSON: Promise<void> = copyFileTo(
    //     inPaths.files.packageJson,
    //     outPaths.files.packageJson
    // );
    // const copyPackageLockJSON: Promise<void> = copyFileTo(
    //     inPaths.files.packageLockJson,
    //     outPaths.files.packageLockJson
    // );
    // const copyPackageJSON_server: Promise<void> = copyFileTo(
    //     inPaths.files.serverPackageJson,
    //     outPaths.files.serverPackageJson
    // );
    // const copyPackageLockJSON_server: Promise<void> = copyFileTo(
    //     inPaths.files.serverPackageLockJson,
    //     outPaths.files.serverPackageLockJson
    // );
    // const copyPackageJSON_client: Promise<void> = copyFileTo(
    //     inPaths.files.clientPackageJson,
    //     outPaths.files.clientPackageJson
    // );
    // const copyPackageLockJSON_client: Promise<void> = copyFileTo(
    //     inPaths.files.clientPackageLockJson,
    //     outPaths.files.clientPackageLockJson
    // );
    const copyReadMe: Promise<void> = copyFileTo(
        inPaths.files.readme,
        outPaths.files.readme
    );
    const copyVscodeIgnore: Promise<void> = copyFileTo(
        inPaths.files.vscodeIgnore,
        outPaths.files.vscodeIgnore
    );
    const copyChangelog: Promise<void> = copyFileTo(
        inPaths.files.changelog,
        outPaths.files.changelog
    );

    await Promise.all([
        copyExtConfig,
        copySqfConfig,
        copyReadMe,
        copyVscodeIgnore,
        copyChangelog,
        // copyPackageJSON,
        // copyPackageLockJSON,
        // copyPackageJSON_server,
        // copyPackageLockJSON_server,
        // copyPackageJSON_client,
        // copyPackageLockJSON_client,
        writeSqfGrammar,
    ]);
};

const buildTopLevel = async () => {
    await build();
};
try {
    buildTopLevel();
} catch (error) {
    console.log(error);
}
