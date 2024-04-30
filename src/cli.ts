import { loadUserConfig } from "./defineConfig";
import { runTypeMirror } from "./runTypeMirror";
loadUserConfig().then(config => {
  runTypeMirror(config).catch(error => {
    console.error('Failed to run type-mirror:', error);
    process.exit(1);
  });
})
