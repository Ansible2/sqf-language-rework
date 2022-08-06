export interface BuildPaths {
	topDir?: string,
	languageConfigDir: string,
	configurationDir: string,
	extLanguageConfigFile: string,
	sqfLanguageConfigFile: string,
}

const configurationDir = "configuration";
const languageConfigDir = `${configurationDir}/language-configs`;
const outDir = ".out";
const languageConfigDir_out = `${outDir}/${languageConfigDir}`;
const configurationDir_out = `${outDir}/configuration`;


const extConfigFilePath = `${languageConfigDir}/ext.configuration.json`;
const extConfigFilePath_out = `${languageConfigDir_out}/ext.configuration.json`;

const sqfConfigFilePath = `${languageConfigDir}/sqf.configuration.json`;
const sqfConfigFilePath_out = `${languageConfigDir_out}/sqf.configuration.json`;

export class BuildContext {
	constructor() {}
	
	static readonly paths: BuildPaths = {
		languageConfigDir: languageConfigDir,
		extLanguageConfigFile: extConfigFilePath,
		sqfLanguageConfigFile: sqfConfigFilePath,
		configurationDir: configurationDir
	};

	static readonly outPaths: BuildPaths = {
		topDir: outDir,
		languageConfigDir: languageConfigDir_out,
		extLanguageConfigFile: extConfigFilePath_out,
		sqfLanguageConfigFile: sqfConfigFilePath_out,
		configurationDir: configurationDir_out
	};

}