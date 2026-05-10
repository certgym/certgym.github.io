import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CertGym 證照道館",
  tagline: "閃卡、題庫、錯題收藏，讓備考變得有趣又高效",
  favicon: "/img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.certgym.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "certgym", // Usually your GitHub org/user name.
  projectName: "certgym.github.io", // repo

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-PJJMQG4X", // GTM
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/explore",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // index hash
        hashed: true,
        // language
        language: ["en", "zh"],
        // highlight term
        highlightSearchTermsOnTargetPage: true,
        // docs route base path
        // docsRouteBasePath: "/explore",
        blogRouteBasePath: "/blog",
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "https://www.certgym.com/img/logo.png",
    // colorMode: {
    //   respectPrefersColorScheme: true,
    // },
    // algolia: {
    //   appId: "HHT6LFI2CT",
    //   apiKey: "ff0205c345c78cc43d0b19adf2c47826",
    //   indexName: "prod_NAME",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "CertGym",
      logo: {
        alt: "CertGym 證照道館",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "resourceSidebar",
          position: "left",
          label: "學習資源",
        },
        { to: "/blog", label: "最新文章", position: "left" },
        { to: "/about", label: "關於我們", position: "left" },
        {
          href: "https://facebook.com/groups/certgym",
          label: "學習交流社群",
          position: "left",
        },
        {
          href: "#",
          label: "立即下載",
          position: "right",
          className: "navbar__download-cta",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "備考資源",
          items: [
            {
              label: "學習資源",
              to: "/explore",
            },
            {
              label: "最新文章",
              to: "/blog",
            },
            {
              label: "關於我們",
              to: "/about",
            },
          ],
        },
        {
          title: "學習社群",
          items: [
            {
              label: "Facebook 學習交流社群",
              href: "https://facebook.com/groups/certgym",
            },
            {
              label: "追蹤 Instagram",
              href: "https://www.instagram.com/certgym_com",
            },
            {
              label: "追蹤 Facebook",
              href: "https://www.facebook.com/certgym",
            },
          ],
        },
        {
          title: "下載 App",
          items: [
            {
              label: "App Store (即將上線)",
              href: "#",
            },
            {
              label: "Google Play (即將上線)",
              href: "#",
            },
          ],
        },
        {
          title: "聯絡我們",
          items: [
            {
              label: "發送信件",
              to: "mailto:certgym.com@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CertGym 證照道館, Inc. Built with ❤️ by <a href="https://www.kdchang.com">KD Chang</a> in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
