export interface BuildPaths {
	directories: {
		top?: string,
		configuration: string,
		languageConfigs: string,
		syntaxes: string
	},
	files: {
		extLanguageConfig: string,
		sqfLanguageConfig: string,
		packageJson: string,
		readme_file: string,
		vscodeIgnore: string,
		changelog: string
	}
}

const outDir = ".out";

const configurationDir = "configuration";
const configurationDir_out = `${outDir}/${configurationDir}`;

const languageConfigDir = `${configurationDir}/language-configs`;
const languageConfigDir_out = `${outDir}/${languageConfigDir}`;

const syntaxesDir = `${configurationDir}/syntaxes`;
const syntaxesDir_out = `${outDir}/${syntaxesDir}`;

const extConfigFilePath = `${languageConfigDir}/ext.configuration.json`;
const extConfigFilePath_out = `${languageConfigDir_out}/ext.configuration.json`;

const sqfConfigFilePath = `${languageConfigDir}/sqf.configuration.json`;
const sqfConfigFilePath_out = `${languageConfigDir_out}/sqf.configuration.json`;

const packageJsonFilePath = "package.json";
const packageJsonFilePath_out = `${outDir}/${packageJsonFilePath}`;

const readmeFilePath = "README.md";
const readmeFilePath_out = `${outDir}/${readmeFilePath}`;

const vscodeIgnoreFilePath = ".vscodeignore";
const vscodeIgnoreFilePath_out = `${outDir}/${vscodeIgnoreFilePath}`;

const changelogFilePath = "CHANGELOG.md";
const changelogFilePath_out = `${outDir}/${changelogFilePath}`;

export class BuildContext {
	constructor() {}
	
	static readonly in: BuildPaths = {
		directories: {
			configuration: configurationDir,
			languageConfigs: languageConfigDir,
			syntaxes: syntaxesDir
		},
		files: {
			extLanguageConfig: extConfigFilePath,
			sqfLanguageConfig: sqfConfigFilePath,
			packageJson: packageJsonFilePath,
			readme_file: readmeFilePath,
			vscodeIgnore: vscodeIgnoreFilePath,
			changelog: changelogFilePath
		},
	};

	static readonly out: BuildPaths = {
		directories: {
			top: outDir,
			configuration: configurationDir_out,
			languageConfigs: languageConfigDir_out,
			syntaxes: syntaxesDir_out
		},
		files: {
			extLanguageConfig: extConfigFilePath_out,
			sqfLanguageConfig: sqfConfigFilePath_out,
			packageJson: packageJsonFilePath_out,
			readme_file: readmeFilePath_out,
			vscodeIgnore: vscodeIgnoreFilePath_out,
			changelog: changelogFilePath_out
		},
	};

}