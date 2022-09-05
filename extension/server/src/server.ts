import { ILangServer } from "./LangServer/ILangServer";
import { NodeLangServer } from "./LangServer/NodeLangServer.humble";

const langServer: ILangServer = new NodeLangServer();
