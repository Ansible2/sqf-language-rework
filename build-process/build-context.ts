export interface BuildPaths {
	directories: {
		top?: string,
		configuration: string,
		languageConfigs: string,
		grammars: string,
		extension: string,
		server: string,
		client: string
	},
	files: {
		extLanguageConfig: string,
		sqfLanguageConfig: string,
		packageJson: string,
		packageLockJson: string,
		readme: string,
		vscodeIgnore: string,
		changelog: string,
		serverPackageJson: string,
		serverPackageLockJson: string,
		clientPackageJson: string,
		clientPackageLockJson: string
		sqfGrammar: string,
		extGrammar: string
	}
}

const outDir = ".out";

const configurationDir = "configuration";
const configurationDir_out = `${outDir}/${configurationDir}`;

const languageConfigDir = `${configurationDir}/language-configs`;
const languageConfigDir_out = `${outDir}/${languageConfigDir}`;

const grammarsDir = `${configurationDir}/grammars`;
const grammarsDir_out = `${outDir}/${grammarsDir}`;

const extensionDir = "extension";
const extensionDir_out = `${outDir}/${extensionDir}`;

const serverDir = `${extensionDir}/server`;
const serverDir_out = `${extensionDir_out}/server`;

const clientDir = `${extensionDir}/client`;;
const clientDir_out = `${extensionDir_out}/client`;

const extConfigFilePath = `${languageConfigDir}/ext.configuration.json`;
const extConfigFilePath_out = `${languageConfigDir_out}/ext.configuration.json`;
const extGrammarFilePath_out = `${grammarsDir_out}/ext.grammar.json`;

const sqfConfigFilePath = `${languageConfigDir}/sqf.configuration.json`;
const sqfConfigFilePath_out = `${languageConfigDir_out}/sqf.configuration.json`;
const sqfGrammarFilePath_out = `${grammarsDir_out}/sqf.grammar.json`;

const packageJsonFilePath = "package.json";
const packageJsonFilePath_out = `${outDir}/${packageJsonFilePath}`;
const packageLockJsonFilePath = "package-lock.json";
const packageLockJsonFilePath_out = `${outDir}/${packageLockJsonFilePath}`;

const packageJsonFilePath_server = `${serverDir}/${packageJsonFilePath}`;
const packageJsonFilePath_server_out = `${serverDir_out}/${packageJsonFilePath}`;
const packageLockJsonFilePath_server = `${serverDir}/${packageLockJsonFilePath}`;
const packageLockJsonFilePath_server_out = `${serverDir_out}/${packageLockJsonFilePath}`;

const packageJsonFilePath_client = `${clientDir}/${packageJsonFilePath}`;
const packageJsonFilePath_client_out = `${clientDir_out}/${packageJsonFilePath}`;
const packageLockJsonFilePath_client = `${clientDir}/${packageLockJsonFilePath}`;
const packageLockJsonFilePath_client_out = `${clientDir_out}/${packageLockJsonFilePath}`;

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
			grammars: grammarsDir,
			extension: extensionDir,
			server: serverDir,
			client: clientDir
		},
		files: {
			extLanguageConfig: extConfigFilePath,
			sqfLanguageConfig: sqfConfigFilePath,
			sqfGrammar: "",
			extGrammar: "",
			packageJson: packageJsonFilePath,
			packageLockJson: packageLockJsonFilePath,
			readme: readmeFilePath,
			vscodeIgnore: vscodeIgnoreFilePath,
			changelog: changelogFilePath,
			serverPackageJson: packageJsonFilePath_server,
			serverPackageLockJson: packageLockJsonFilePath_server,
			clientPackageJson: packageJsonFilePath_client,
			clientPackageLockJson: packageLockJsonFilePath_client
		},
	};

	static readonly out: BuildPaths = {
		directories: {
			top: outDir,
			configuration: configurationDir_out,
			languageConfigs: languageConfigDir_out,
			grammars: grammarsDir_out,
			extension: extensionDir_out,
			server: serverDir_out,
			client: clientDir_out
		},
		files: {
			extLanguageConfig: extConfigFilePath_out,
			sqfLanguageConfig: sqfConfigFilePath_out,
			sqfGrammar: sqfGrammarFilePath_out,
			extGrammar: extGrammarFilePath_out,
			packageJson: packageJsonFilePath_out,
			packageLockJson: packageLockJsonFilePath_out,
			readme: readmeFilePath_out,
			vscodeIgnore: vscodeIgnoreFilePath_out,
			changelog: changelogFilePath_out,
			serverPackageJson: packageJsonFilePath_server_out,
			serverPackageLockJson: packageLockJsonFilePath_server_out,
			clientPackageJson: packageJsonFilePath_client_out,
			clientPackageLockJson: packageLockJsonFilePath_client_out
		},
	};

}