import path from 'path';
import { generateTypeScriptInterface, writeTypesToFile } from './core';
import { Config } from './defineConfig';
import { tpl } from './clienl-template';

export async function runTypeMirror(config: Config) {
  const typeMirrorDir = path.resolve(process.cwd(), 'node_modules/type-mirror/dist');
  for (const [key, fetchFunction] of Object.entries(config.client)) {
    const jsonData = await fetchFunction();
    const typeString = await generateTypeScriptInterface(jsonData, key);
    const typeFilePath = path.resolve(typeMirrorDir, `client.d.ts`);
    await writeTypesToFile(tpl(typeString), typeFilePath);
  }

  console.log('Type-mirror has successfully generated types.');
}
