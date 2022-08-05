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
	// const copyExtConfig = fs.copyFile(extConfigFilePath,outConfigFolderPath, (error) => console.error(error));
	const copyExtConfig = fsPromises.copyFile(extConfigFilePath,extConfigFilePathOut);
	// const copySqfConfig = fs.copyFile(sqfConfigFilePath,outConfigFolderPath, (error) => console.error(error));
	const copySqfConfig = fsPromises.copyFile(sqfConfigFilePath,sqfConfigFilePathOut);
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


