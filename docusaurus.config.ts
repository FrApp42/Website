import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Frenchy Apps 42',
  tagline: 'Isn\'t C# beautiful?',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://frapp42.fr',
  // Served from the root of the custom domain
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FrApp42', // Usually your GitHub org/user name.
  projectName: 'Website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/FrApp42/Website/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/FrApp42/Website/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Frenchy Apps 42',
      logo: {
        alt: 'Frenchy Apps 42 logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/FrApp42',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Helpful links',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog'
            }
          ],
        },
        {
          title: 'Our work',
          items: [
            {
              label: 'Public Projects',
              href: 'https://github.com/orgs/FrApp42/repositories',
            },
            {
              label: 'Nuget Packages',
              href: 'https://www.nuget.org/profiles/FrenchyApps42',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //   ],
        // },
      ],
      copyright: `© ${new Date().getFullYear()} Frenchy Apps 42`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
