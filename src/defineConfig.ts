export interface Config {
  client: {
    [key: string]: () => Promise<any>;
  };
}
import { loadConfig } from 'unconfig'

export const loadUserConfig = async (): Promise<Config> => {
  const loadResut = await loadConfig({
    sources: [
      {
        files: 'typemirror.config',
        // default extensions
        extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
      },
      // load `devai` field in `package.json` if no above config files found
      {
        files: 'package.json',
        extensions: [],
        rewrite(config) {
          // @ts-expect-error
          return config?.typemirror
        },
      },
    ],
    merge: false,
  })

  return loadResut.config
}

export function defineConfig(config: Config): Config {
  return config;
}
