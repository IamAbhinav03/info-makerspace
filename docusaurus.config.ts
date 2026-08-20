import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Makerspace',
  tagline: 'Learn, build, repair, and make with confidence.',
  favicon: 'img/MS_Isometric_Light_Inverted@2x.png',

  future: {
    v4: true,
    faster: {
      rspackBundler: false,
      rspackPersistentCache: false,
    },
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
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Makerspace',
      logo: {
        alt: 'Makerspace logo',
        src: 'img/MS_Isometric_Light_Inverted@2x.png',
        width: 38,
        height: 38,
      },

      items: [
        {
          to: '/docs/intro',
          label: 'Start Here',
          position: 'left',
        },
        {
          to: '/docs/code-of-conduct',
          label: 'Safety',
          position: 'left',
        },
        {
          to: '/docs/equipment',
          label: 'Equipment',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/community',
          label: 'Community',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'left',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
