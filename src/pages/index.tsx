import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Icon, { type IconName } from "@site/src/components/Icon";

import styles from "./index.module.css";

function PhoneMock(): ReactNode {
  const options = [
    { key: "A", text: "準確率（Accuracy）" },
    { key: "B", text: "F1 分數", correct: true },
    { key: "C", text: "均方誤差（MSE）" },
    { key: "D", text: "決定係數（R²）" },
  ];
  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <div className={styles.phoneBar}>
          <span>iPAS AI 應用規劃師 · 初級</span>
          <span className={styles.phoneProgress}>7 / 20</span>
        </div>
        <div className={styles.questionCard}>
          <p className={styles.questionText}>
            類別不平衡時，下列何者較適合評估分類模型的表現？
          </p>
          {options.map((o) => (
            <div
              key={o.key}
              className={o.correct ? styles.optionCorrect : styles.option}
            >
              <span className={styles.optionKey}>{o.key}</span>
              <span>{o.text}</span>
              {o.correct && (
                <Icon name="check" size={16} className={styles.optionTick} />
              )}
            </div>
          ))}
        </div>
        <div className={styles.explainCard}>
          <span className={styles.explainTag}>AI 解析</span>
          類別不平衡時準確率容易失真；F1 分數兼顧精確率與召回率，較能反映少數類別的表現。
        </div>
      </div>
    </div>
  );
}

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>CertGym 職場人的證照道館</p>
            <Heading as="h1" className={styles.heroTitle}>
              刷題升段，
              <br />
              考照像闖關
            </Heading>
            <p className={styles.heroLead}>
              依官方考綱學知識點，再用歷屆試題與原創練習題刷題升段，答錯的題目自動回到複習清單。目前收錄
              iPAS AI 應用規劃師、華語導遊、華語領隊、會計師 4 個類科。
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.btnPrimary} to="#download">
                <Icon name="smartphone" size={18} />
                下載 App
              </Link>
              <Link className={styles.btnGhost} to="/explore">
                瀏覽學習資源
                <Icon name="arrowRight" size={18} />
              </Link>
            </div>
            <p className={styles.heroNote}>
              iOS・Android 即將上架　·　免費開始使用　·　不需註冊帳號
            </p>
          </div>
          <PhoneMock />
        </div>
      </div>
    </header>
  );
}

function FactsBar(): ReactNode {
  const facts: { value: string; label: string; icon: IconName }[] = [
    { value: "32", label: "個知識點", icon: "bookOpen" },
    { value: "550", label: "題歷屆考題", icon: "fileText" },
    { value: "閃卡", label: "零碎時間翻卡複習", icon: "layers" },
    { value: "每日一題", label: "推播提醒維持手感", icon: "bell" },
  ];
  return (
    <section className={styles.facts} aria-label="CertGym 概況">
      <div className="container">
        <ul className={styles.factsList}>
          {facts.map((f) => (
            <li key={f.label} className={styles.fact}>
              <Icon name={f.icon} size={22} className={styles.factIcon} />
              <div>
                <span className={styles.factValue}>{f.value}</span>
                <span className={styles.factLabel}>{f.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function DownloadSection(): ReactNode {
  return (
    <section className={styles.download}>
      <div className="container">
        <div className={styles.downloadInner}>
          <div>
            <Heading as="h2" id="download" className={styles.downloadTitle}>
              下載 CertGym
            </Heading>
            <p className={styles.downloadLead}>
              App Store 與 Google Play 審核中，上架後會在電子報與社群第一時間通知。
            </p>
            <div className={styles.storeButtons}>
              <span className={styles.storeButton} aria-disabled="true">
                <Icon name="smartphone" size={20} />
                <span>
                  <small>即將上架</small>
                  App Store
                </span>
              </span>
              <span className={styles.storeButton} aria-disabled="true">
                <Icon name="smartphone" size={20} />
                <span>
                  <small>即將上架</small>
                  Google Play
                </span>
              </span>
            </div>
          </div>
          <div className={styles.newsletter}>
            <iframe
              title="CertGym 電子報訂閱"
              src="https://certgym.substack.com/embed"
              width="100%"
              height="320"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="刷題升段，考照像闖關"
      description="CertGym 證照道館以知識點學習、原創練習、歷屆試題、閃卡與錯題複習，幫助職場人循序掌握證照所需能力。目前收錄 iPAS AI 應用規劃師、華語導遊、華語領隊、會計師，免註冊、可離線使用。"
    >
      <HomepageHeader />
      <FactsBar />
      <main>
        <HomepageFeatures />
      </main>
      <DownloadSection />
    </Layout>
  );
}
