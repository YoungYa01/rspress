import * as path from 'path';
import {defineConfig} from 'rspress/config';
import {
  pluginShiki,
  createTransformerDiff,
  createTransformerLineNumber,
  createTransformerErrorLevel,
  createTransformerHighlight,
  createTransformerFocus
} from '@rspress/plugin-shiki';
import {pluginLastUpdated} from "@rspress/plugin-last-updated";
import alignImage from 'rspress-plugin-align-image';
// import readingTime from 'rspress-plugin-reading-time';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: "YoungYa's doc web site" ,
  description: "YoungYa's blog System in use of recording some of documents",
  icon: '/longbg.png',
  logo: {
    light: '/longbg.png',
    dark: '/logobai.png',
  },
  themeConfig: {
    socialLinks: [
      {icon: 'github', mode: 'link', content: 'https://github.com/YoungYa01'},
      {icon: 'qq', mode: 'text', content: '1829594026',},
    ],
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    enableScrollToTop: true,
    overview: {
      filterNameText: 'Filter',
      filterPlaceholderText: 'Enter keyword',
      filterNoResultText: 'No matching API found',
    },
    outlineTitle:'目录 | Outline',
    lastUpdated: true,
    footer: {
      message: `
      <span>Copyright © 2023-${new Date().getFullYear()} YoungYa</span><br>
      <span><a href="https://beian.miit.gov.cn/">蜀ICP备2023021028号-1</a></span>
      `,
    }
  },
  mediumZoom: {
    selector: '.rspress-doc img',
  },
  plugins: [
    alignImage({
      justify: 'left'
    }),
    // readingTime({
    //   defaultLocale: 'zh-CN',
    // }),
    pluginShiki({
      transformers: [
        pluginLastUpdated(),
        createTransformerDiff(),
        createTransformerLineNumber(),
        createTransformerErrorLevel(),
        createTransformerHighlight(),
        createTransformerFocus(),
      ],
    }),
  ],
  markdown: {
    showLineNumbers: true,
  },
});
