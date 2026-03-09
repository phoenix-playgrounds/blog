import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Playgrounds.dev Blog',
  tagline: 'Updates, guides, and insights from the Playgrounds team',
  favicon: 'img/favicon.ico',

  headTags: [
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/icon-192.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: '/site.webmanifest' } },
  ],

  future: {
    v4: true,
  },

  url: 'https://blog.playgrounds.dev',
  baseUrl: '/',

  organizationName: 'phoenix-playgrounds',
  projectName: 'blog',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    localeConfigs: {
      en: { label: 'English' },
      uk: { label: 'Українська' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          blogTitle: 'Playgrounds.dev Blog',
          blogDescription: 'Updates, guides, and insights from the Playgrounds team',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],




  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'description', content: 'Updates, guides, and insights from the Playgrounds.dev team.' },
        { name: 'keywords', content: 'playgrounds.dev, blog, cloud environments, docker, devops' },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Playgrounds.dev',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://playgrounds.dev',
            label: 'Home',
            position: 'left',
          },
          {
            href: 'https://docs.playgrounds.dev',
            label: 'Docs',
            position: 'left',
          },
          {
            to: '/',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/phoenix-playgrounds',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Playgrounds.dev — All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
