import * as path from "path";
import { BISWikiParser } from "./BIS Wiki Scraper/BISWikiParser.humble";

const parser = new BISWikiParser();
parser.parseWiki(path.resolve(__dirname,"testpage.xml"));