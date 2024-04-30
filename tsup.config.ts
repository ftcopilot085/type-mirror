import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',         // 主入口文件
    client: 'src/client.ts',       // 单独打包 client
    cli: 'src/cli.ts'              // 命令行工具入口
  },
  splitting: false,                // 关闭代码分割，除非你需要
  clean: true,                     // 清理 dist 目录
  format: ['cjs', 'esm'],          // 生成 CommonJS 和 ES Module 格式
  dts: true,                       // 生成类型定义文件
  sourcemap: true,                 // 生成源码映射
  external: ['commander'],         // 标记外部依赖
  onSuccess: 'echo Build complete',// 构建成功后的提示
  outDir: 'dist',                  // 输出目录
  banner: {                        // 文件头部注释
    js: '#!/usr/bin/env node'
  }
});
