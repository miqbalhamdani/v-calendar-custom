const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');

module.exports = {
  title: 'V-Calendar-Custom',
  description: 'An elegant calendar and datepicker plugin for Vuejs.',
  plugins: [
    // Google analytics
    ['@vuepress/google-analytics', { ga: 'UA-113780759-1' }],
  ],
  head: [['link', { rel: 'icon', href: 'favicon.png' }]],
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/',
      },
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'Changelog',
        link: '/changelog/v1.0',
      },
      {
        text: 'Sponsor',
        link: 'https://github.com/sponsors/nathanreyes',
      },
    ],
    sidebar: {
      '/api/': [
        {
          title: 'API',
          collapsable: false,
          children: [
            '',
            'defaults',
            'calendar',
            'page-object',
            'day-object',
            'attribute',
            'datepicker',
            'date-patterns',
          ],
        },
      ],
      '/changelog/': [
        {
          title: 'Changelog',
          collapsable: false,
          children: [
            'v0.1',
            'v0.2',
            'v0.3',
            'v0.4',
            'v0.5',
            'v0.6',
            'v0.7',
            'v0.8',
            'v0.9',
            'v1.0',
          ],
        },
      ],
      '/tests/': [
        {
          title: 'Tests',
          children: [''],
        },
      ],
      '/showcase/': [
        {
          title: 'Showcase',
          collapsable: false,
          children: ['', 'github'],
        },
      ],
      '/': [
        {
          title: '',
          collapsable: false,
          children: ['', 'sponsors'],
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: ['installation', 'custom-defaults'],
        },
        {
          title: 'Core Concepts',
          collapsable: false,
          children: [
            'colors-dark-mode',
            'layouts',
            'navigation',
            'dates',
            'i18n',
            'attributes',
            'datepicker',
            'theming-guide',
          ],
        },
      ],
    },
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'miqbalhamdani/v-calendar-custom',
    // if your docs are not at the root of the repo
    docsDir: 'docs',
    // optional, defaults to master
    docsBranch: 'master',
    // defaults to true, set to false to disable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help me improve this page!',
  },
  postcss: {
    plugins: [
      require('autoprefixer'),
      postcssPresetEnv({
        stage: 3,
        features: { 'nesting-rules': true, 'custom-properties': true },
      }),
    ],
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /tailwind\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                indent: 'postcss',
                plugins: [tailwindcss('docs/.vuepress/tailwind.config.js')],
              },
            },
          ],
        },
        {
          test: /tailwind-lib\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                indent: 'postcss',
                plugins: [tailwindcss('./tailwind.config.js')],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
  },
};
