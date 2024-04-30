import { promises as fs } from 'fs';
import JsonToTS from 'json-to-ts';

export async function writeTypesToFile(typeString: string, filePath: string) {
  await fs.writeFile(filePath, typeString, 'utf8');
}

export async function generateTypeScriptInterface(data: unknown, typeName: string): Promise<string> {
  if (typeof data === 'object' && data !== null) {
    // 对象或者数组，使用json2ts生成TypeScript接口
    return JsonToTS(data, {
      rootName: typeName
    }).join('/n');
  } else if (typeof data === 'number') {
    return 'number';
  } else if (typeof data === 'string') {
    return 'string';
  } else if (typeof data === 'boolean') {
    return 'boolean';
  } else {
    // 对于未处理的类型，可以直接返回'unknown'或者抛出错误
    return 'unknown';
  }
}
