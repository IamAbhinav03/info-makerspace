import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Makerspace Handbook',
  tagline: 'Everything you need to know to make, build, and explore.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-makespace-website.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

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
        },

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'MAKERSPACE',

      items: [
        
        {
          to: '/docs/code-of-conduct',
          label: 'Code of Conduct',
          position: 'left',
        },
        {
          to: '/docs/equipment',
          label: 'Equipment / Facility',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About Us',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact Us',
          position: 'left',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Makerspace',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Equipment / Facility',
              to: '/equipment',
            },
            {
              label: 'Projects',
              to: '/projects',
            },
          ],
        },

        {
          title: 'Information',
          items: [
            {
              label: 'Code of Conduct',
              to: '/code-of-conduct',
            },
            {
              label: 'About Us',
              to: '/about',
            },
            {
              label: 'Contact Us',
              to: '/contact',
            },
          ],
        },
      ],

      copyright: `© ${new Date().getFullYear()} Makerspace. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;