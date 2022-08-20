import * as fs from "fs";
import * as fse from "fs-extra";
import * as fsPromises from "fs/promises";
import * as jsonFile from "jsonfile";
import { BuildContext, BuildPaths } from "./build-context";
import { sqfGrammar } from "../configuration/grammars/sqf.grammar";


const copyFileTo = (origin: string, destination: string): Promise<void> => {
	console.log(`Copying [${origin}] to [${destination}]`);

	return fsPromises.copyFile(
        origin,
        destination
    );
};
const copyDirectoryTo = (origin: string, destination: string): Promise<void> => {
	console.log(`Copying Directory [${origin}] to [${destination}]`);

	return fse.copy(
        origin,
        destination
    );
};

const createDirectory = (path: string): void => {
	const directoryExitsts: boolean = fs.existsSync(path);
    if (!directoryExitsts) {
        console.log(`Directory at [${path}] does not exist. Creating...`);
        fs.mkdirSync(path);
    }
}

const build = async () => {
    const inPaths: BuildPaths = BuildContext.in;
    const outPaths: BuildPaths = BuildContext.out;
    console.log("\nExecuting build process...");

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
    createDirectory(outPaths.directories.grammarDocs);

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
	const jsonWriteOptions: jsonFile.JFWriteOptions = { spaces: 4, EOL: '\r\n' };
	const writeSqfGrammar: Promise<void> = jsonFile.writeFile(outPaths.files.sqfGrammar, sqfGrammar, jsonWriteOptions);
	// const writeExtGrammar: Promise<void> = jsonFile.writeFile(outPaths.files.extGrammar, extGrammar);


    /* ----------------------------------------------------------------------------
		copy main static files
    ---------------------------------------------------------------------------- */
	const copyGrammarDocsDir: Promise<void> = copyDirectoryTo(
		inPaths.directories.grammarDocs,
		outPaths.directories.grammarDocs
	);

    const copyPackageJSON: Promise<void> = copyFileTo(
        inPaths.files.packageJson,
        outPaths.files.packageJson
    );
    const copyPackageLockJSON: Promise<void> = copyFileTo(
        inPaths.files.packageLockJson,
        outPaths.files.packageLockJson
    );
    const copyPackageJSON_server: Promise<void> = copyFileTo(
        inPaths.files.serverPackageJson,
        outPaths.files.serverPackageJson
    );
    const copyPackageLockJSON_server: Promise<void> = copyFileTo(
        inPaths.files.serverPackageLockJson,
        outPaths.files.serverPackageLockJson
    );
    const copyPackageJSON_client: Promise<void> = copyFileTo(
        inPaths.files.clientPackageJson,
        outPaths.files.clientPackageJson
    );
    const copyPackageLockJSON_client: Promise<void> = copyFileTo(
        inPaths.files.clientPackageLockJson,
        outPaths.files.clientPackageLockJson
    );
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
		copyGrammarDocsDir,
        copyExtConfig,
        copySqfConfig,
        copyPackageJSON,
        copyReadMe,
        copyVscodeIgnore,
        copyChangelog,
        copyPackageLockJSON,
        copyPackageJSON_server,
        copyPackageLockJSON_server,
        copyPackageJSON_client,
        copyPackageLockJSON_client,
		writeSqfGrammar
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
