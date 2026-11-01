import fs from 'node:fs';
import path from 'node:path';
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// The API pages are generated (see scripts/generate-api.py): one folder per package, with one page per
// namespace (`AxiosNet.Client.md`) and one per type (`AxiosNet.Client.AxiosClient.md`).
const apiDir: string = path.join(__dirname, 'api');

const packages: string[] = fs.existsSync(apiDir)
  ? fs
      .readdirSync(apiDir, {withFileTypes: true})
      .filter((d) => d.isDirectory() && fs.existsSync(path.join(apiDir, d.name, 'namespaces.json')))
      .map((d) => d.name)
      .sort()
  : [];

const sidebars: SidebarsConfig = {
  apiSidebar: packages.map((name) => {
    const {label, namespaces} = JSON.parse(
      fs.readFileSync(path.join(apiDir, name, 'namespaces.json'), 'utf-8'),
    ) as {label: string; namespaces: string[]};
    const ids: string[] = fs
      .readdirSync(path.join(apiDir, name))
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.slice(0, -3))
      .sort();

    return {
      type: 'category' as const,
      label,
      link: {type: 'doc' as const, id: `${name}/index`},
      items: namespaces.map((ns) => ({
        type: 'category' as const,
        label: ns,
        link: {type: 'doc' as const, id: `${name}/${ns}`},
        items: ids
          .filter((id) => id.startsWith(`${ns}.`) && !namespaces.includes(id))
          .map((id) => ({type: 'doc' as const, id: `${name}/${id}`})),
      })),
    };
  }),
};

export default sidebars;
