import yaml from 'yaml';
import { createFilter } from '@rollup/pluginutils';

import type { Plugin } from 'vite';
import type { FilterPattern } from '@rollup/pluginutils';

export type PluginOptions = {
  include?: FilterPattern;
  exclude?: FilterPattern;
  yamlOptions?: (yaml.ParseOptions & yaml.DocumentOptions & yaml.SchemaOptions & yaml.ToJSOptions);
};

const yamlExtension = /\.ya?ml$/;

export default function(options: PluginOptions = {}): Plugin {
  return {
    name: 'vite:transform-yaml',
    transform: async (code: string, id: string) => {
      if (yamlExtension.test(id)) {
        const filter = createFilter(options.include, options.exclude);

        if (!filter(id)) {
          return null;
        }

        const data = yaml.parse(code, options.yamlOptions);
        const json = JSON.stringify(data);

        return {
          map: { mappings: "" },
          code: `export default ${json};`,
        };
      }
      return null;
    },
  };
}
