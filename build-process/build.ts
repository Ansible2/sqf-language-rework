import * as fs from "fs";
import * as fsPromises from "fs/promises";
import { BuildContext, BuildPaths } from "./build-context";

const build = async () => {
    const paths: BuildPaths = BuildContext.paths;
    const outPaths: BuildPaths = BuildContext.outPaths;
    console.log("\nExecuting build process...");
	
	/* ----------------------------------------------------------------------------
		Create .out Directory
	---------------------------------------------------------------------------- */
    const outDirectoryExitsts: boolean = fs.existsSync(outPaths.topDir);
    if (!outDirectoryExitsts) {
        console.log("Out directory does not exist...");
        console.log(`Creating directory at: ${outPaths.topDir}`);

        fs.mkdirSync(outPaths.topDir);
    }
	

	/* ----------------------------------------------------------------------------
		Create language configs out Directory
	---------------------------------------------------------------------------- */
    const outConfigsDirectoryExitsts: boolean = fs.existsSync(
        outPaths.languageConfigDir
    );
    if (!outConfigsDirectoryExitsts) {
        console.log("Out configs directory does not exist...");
        console.log(`Creating directory at: ${outPaths.languageConfigDir}`);

        fs.mkdirSync(outPaths.configurationDir);
        fs.mkdirSync(outPaths.languageConfigDir);
    }
	
	// empty space
    console.log();
	

	/* ----------------------------------------------------------------------------
		copy configuration.json's to .out folder
	---------------------------------------------------------------------------- */
    const copyExtConfig: Promise<void> = fsPromises.copyFile(
        paths.extLanguageConfigFile,
        outPaths.extLanguageConfigFile
    );
    console.log("Copying .ext language configuration json file...");
    const copySqfConfig: Promise<void> = fsPromises.copyFile(
        paths.sqfLanguageConfigFile,
        outPaths.sqfLanguageConfigFile
    );
    console.log("Copying .sqf language configuration json file...");
	
    await Promise.all([copyExtConfig, copySqfConfig]);
};



const buildTopLevel = async () => {
    await build();
};
try {
    buildTopLevel();
} catch (error) {
    console.log(error);
}
