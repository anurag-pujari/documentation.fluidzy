import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fluidzy documentation',
  tagline: 'Ship docs faster',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://anurag-pujari.github.io',
  baseUrl: '/',

  organizationName: 'anurag-pujari',
  projectName: 'documentation.fluidzy',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        // THIS LINE IS THE KEY:
        docItemComponent: "@theme/ApiItem", 
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    } satisfies Preset.Options,
  ],
],



  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          docupipe: {
            specPath: "examples/docupipe-api.yaml",
            outputDir: "docs/api",
            sidebarOptions: { 
              groupPathsBy: "tag", 
              categoryLinkSource: "tag",
            },
          },
          get_doc_detailed: {
            specPath: "examples/samples/get-document-detailed.yaml",
            outputDir: "docs/samples/get-document-detailed",
            sidebarOptions: { 
              groupPathsBy: "tag", 
              categoryLinkSource: "tag",
            },
          }
        }
      }
    ],
  ],
  themes: [
    'docusaurus-theme-openapi-docs', // This MUST be here to provide the Redux context
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
          prism: {
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
          "dart",
          "objectivec",
          "r",
        ],
      },
    navbar: {
      title: 'Fluidzy',
      logo: {
        alt: 'Fluidzy logo',
        src: 'img/logo-fluidzy.png',
        href: 'https://fluidzy.com'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/anurag-pujari/documentation.fluidzy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fluidzy Project, Inc. Built with Docusaurus.`,
    },
    

  } satisfies Preset.ThemeConfig,
};

export default config;