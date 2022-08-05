import * as fs from "fs";
import * as fsPromises from "fs/promises";

const languageConfigFolderPath = "configuration/configs";
const outFolderPath = ".out";
const outConfigFolderPath = `${outFolderPath}/configs`;

const extConfigFilePath = `${languageConfigFolderPath}/ext.configuration.json`;
const extConfigFilePathOut = `${outConfigFolderPath}/ext.configuration.json`;
const sqfConfigFilePath = `${languageConfigFolderPath}/sqf.configuration.json`;
const sqfConfigFilePathOut = `${outConfigFolderPath}/sqf.configuration.json`;

// copy configuration.json's to .out folder
const build = async () => {
	console.log("\nExecuting build process...");
	
	const outDirectoryExitsts: boolean = fs.existsSync(outFolderPath);
	if (!outDirectoryExitsts) {
		console.log("Out directory does not exist...");
		console.log(`Creating at: ${outFolderPath}`);

		fs.mkdirSync(outFolderPath);
	}

	const outConfigsDirectoryExitsts: boolean = fs.existsSync(outConfigFolderPath);
	if (!outConfigsDirectoryExitsts) {
		console.log("Out configs directory does not exist...");
		console.log(`Creating at: ${outConfigFolderPath}`);
		
		fs.mkdirSync(outConfigFolderPath);
	}
	
	console.log();

	const copyExtConfig: Promise<void> = fsPromises.copyFile(extConfigFilePath,extConfigFilePathOut);
	console.log("Copying .ext language configuration json file...");
	const copySqfConfig: Promise<void> = fsPromises.copyFile(sqfConfigFilePath,sqfConfigFilePathOut);
	console.log("Copying .sqf language configuration json file...");
	
	await Promise.all([copyExtConfig, copySqfConfig])
}

const buildTopLevel = async () => {
	await build();
};
try {
	buildTopLevel();
} catch (error) {
	console.log(error);
}


