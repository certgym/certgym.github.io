import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function StatsBar(): ReactNode {
  const stats = [
    { value: "500+", label: "精選備考題目" },
    { value: "50+", label: "熱門證照科目" },
    { value: "閃卡", label: "智慧閃卡複習" },
    { value: "錯題", label: "錯題收藏分析" },
    { value: "iOS & Android", label: "免費下載" },
  ];
  return (
    <div className="ct-stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="ct-stat-item">
          <span className="ct-stat-value">{s.value}</span>
          <span className="ct-stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--success button--lg" to="#">
            立即下載 App
          </Link>
          <Link
            className="margin-left--sm button button--secondary button--lg"
            to="/explore"
          >
            瀏覽學習資源
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="CertGym 證照道館——透過閃卡、題庫練習、錯題收藏功能，讓備考變得有趣又高效。支援 AWS、Azure、GCP、PMP、GEPT 等熱門證照，隨時隨地敏锐備考，輕鬆取證。"
    >
      <HomepageHeader />
      <StatsBar />
      <main>
        <HomepageFeatures />
      </main>
      <div className="ct-newsletter-wrap">
        <iframe
          src="https://certgym.substack.com/embed"
          width="100%"
          height="320"
          style={{ maxWidth: "680px", margin: "0 auto", display: "block" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Layout>
  );
}
