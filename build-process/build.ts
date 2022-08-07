import * as fs from "fs";
import * as fsPromises from "fs/promises";
import { BuildContext, BuildPaths } from "./build-context";

const copyTo = (origin: string, destination: string): Promise<void> => {
	console.log(`Copying [${origin}] to [${destination}]`);

	return fsPromises.copyFile(
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
    createDirectory(outPaths.directories.syntaxes);
    createDirectory(outPaths.directories.extension);
    createDirectory(outPaths.directories.client);
    createDirectory(outPaths.directories.server);

    // empty space
    console.log();

    /* ----------------------------------------------------------------------------
		copy configuration.json's to .out folder
	---------------------------------------------------------------------------- */
    const copyExtConfig: Promise<void> = copyTo(
        inPaths.files.extLanguageConfig,
        outPaths.files.extLanguageConfig
    );
    const copySqfConfig: Promise<void> = copyTo(
        inPaths.files.sqfLanguageConfig,
        outPaths.files.sqfLanguageConfig
    );

    /* ----------------------------------------------------------------------------
		copy main static files
	---------------------------------------------------------------------------- */
    const copyPackageJSON: Promise<void> = copyTo(
        inPaths.files.packageJson,
        outPaths.files.packageJson
    );
    const copyPackageLockJSON: Promise<void> = copyTo(
        inPaths.files.packageLockJson,
        outPaths.files.packageLockJson
    );
    const copyPackageJSON_server: Promise<void> = copyTo(
        inPaths.files.serverPackageJson,
        outPaths.files.serverPackageJson
    );
    const copyPackageLockJSON_server: Promise<void> = copyTo(
        inPaths.files.serverPackageLockJson,
        outPaths.files.serverPackageLockJson
    );
    const copyPackageJSON_client: Promise<void> = copyTo(
        inPaths.files.clientPackageJson,
        outPaths.files.clientPackageJson
    );
    const copyPackageLockJSON_client: Promise<void> = copyTo(
        inPaths.files.clientPackageLockJson,
        outPaths.files.clientPackageLockJson
    );
    const copyReadMe: Promise<void> = copyTo(
        inPaths.files.readme,
        outPaths.files.readme
    );
    const copyVscodeIgnore: Promise<void> = copyTo(
        inPaths.files.vscodeIgnore,
        outPaths.files.vscodeIgnore
    );
    const copyChangelog: Promise<void> = copyTo(
        inPaths.files.changelog,
        outPaths.files.changelog
    );
	


    await Promise.all([
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
		copyPackageLockJSON_client
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
