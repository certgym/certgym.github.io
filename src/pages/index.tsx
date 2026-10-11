import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Icon, { type IconName } from "@site/src/components/Icon";

import styles from "./index.module.css";

function PhoneMock(): ReactNode {
  const options = [
    { key: "A", text: "當地警察局" },
    { key: "B", text: "我國駐外館處", correct: true },
    { key: "C", text: "搭乘的航空公司" },
    { key: "D", text: "當地移民機關" },
  ];
  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.phoneScreen}>
        <div className={styles.phoneBar}>
          <span>華語領隊 · 領隊實務</span>
          <span className={styles.phoneProgress}>7 / 20</span>
        </div>
        <div className={styles.questionCard}>
          <p className={styles.questionText}>
            旅客於國外遺失護照，領隊應優先協助其向下列何者申請補發？
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
          護照遺失應先報案取得證明，再向駐外館處申請補發或入國證明書。
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
            <p className={styles.eyebrow}>國家考試・專業證照 歷屆試題與模擬考練習</p>
            <Heading as="h1" className={styles.heroTitle}>
              刷題升段，
              <br />
              考照像闖關
            </Heading>
            <p className={styles.heroLead}>
              律師、護理師、會計師、地方特考、導遊領隊、iPAS
              的歷屆考題，整理成題庫、整份模擬考、閃卡與錯題複習。每個類科是一座道館，練得越多，段位越高。
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
              iOS・Android 即將上架　·　免費使用　·　不需註冊帳號
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
    { value: "1,270", label: "題歷屆考題", icon: "fileText" },
    { value: "8", label: "個考試類科", icon: "landmark" },
    { value: "離線", label: "下載後隨時練習", icon: "wifiOff" },
    { value: "免註冊", label: "紀錄只存在你的裝置", icon: "userX" },
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
      title="國家考試與證照歷屆試題、模擬考練習"
      description="CertGym 證照道館收錄律師、護理師、會計師、地方特考、華語導遊領隊、iPAS AI 應用規劃師等歷屆試題，提供題庫練習、整份模擬考、閃卡、錯題複習與收藏集合。免註冊、可離線使用。"
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
