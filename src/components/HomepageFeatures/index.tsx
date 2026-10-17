import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import Icon, { type IconName } from "@site/src/components/Icon";
import styles from "./styles.module.css";

type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "bookOpen",
    title: "知識點學習",
    description:
      "依官方考綱拆成科目、單元與知識點，每個知識點有講解、重點卡與常見誤區，讀完直接練原創題與考過同一觀念的歷屆試題。",
  },
  {
    icon: "listChecks",
    title: "題庫練習",
    description:
      "類科依 AI 與數位、觀光旅遊、專技人員分組，再依梯次、科目挑選範圍並自訂題數。作答後立即顯示正確答案與解析。",
  },
  {
    icon: "clipboard",
    title: "模擬考",
    description:
      "選定梯次，一次作答整份考卷。結束後顯示正確率、及格判定與逐題明細，考前檢驗實力。",
  },
  {
    icon: "layers",
    title: "閃卡",
    description:
      "在練習範圍選單點「用閃卡複習」，同一個範圍換個方式讀。點一下翻面看答案，零碎時間也能複習。",
  },
  {
    icon: "rotateCcw",
    title: "錯題複習",
    description:
      "答錯的題目自動進入「複習」分頁，跨類科集中整理，連續答對兩次才算精熟。",
  },
  {
    icon: "bookmark",
    title: "收藏與集合",
    description:
      "把想再看的題目收進自訂集合，依考試或科目分類，在「複習」分頁整個集合直接開始練習。",
  },
  {
    icon: "award",
    title: "段位與紀錄",
    description:
      "每次作答累積經驗值，從新手門徒練到傳奇宗師。連續天數、作答明細完整保留。",
  },
  {
    icon: "bell",
    title: "每日一題",
    description:
      "在「設定」選好提醒時間與出題範圍，每天推播一題，點開通知就能作答，維持讀書節奏。",
  },
];

const reviewSteps = [
  {
    title: "作答",
    description: "知識點練習、分科刷題或整份模擬考，答完立即看解析。",
  },
  {
    title: "進入待複習",
    description: "答錯的題目自動排入「複習」分頁的待複習清單。",
  },
  {
    title: "連續答對兩次",
    description: "同一題連續答對兩次才移出清單，視為精熟。",
  },
  {
    title: "弱點清零",
    description: "清空一個類科的待複習清單，解鎖該類科徽章。",
  },
];

type Track = {
  icon: IconName;
  group: string;
  items: { name: string; session: string; count: number }[];
};

const tracks: Track[] = [
  {
    icon: "cpu",
    group: "AI 與數位",
    items: [
      { name: "iPAS AI 應用規劃師 初級", session: "114 年第四次", count: 100 },
    ],
  },
  {
    icon: "plane",
    group: "觀光旅遊",
    items: [
      { name: "華語導遊", session: "112 年普考", count: 150 },
      { name: "華語領隊", session: "112 年普考", count: 150 },
    ],
  },
  {
    icon: "calculator",
    group: "專技人員",
    items: [{ name: "會計師", session: "111 年專技高考", count: 150 }],
  },
];

function SectionHeader({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}): ReactNode {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.kicker}>{kicker}</p>
      <Heading as="h2" className={styles.sectionTitle}>
        {title}
      </Heading>
      {lead && <p className={styles.sectionLead}>{lead}</p>}
    </div>
  );
}

function Features(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          kicker="功能"
          title="先學懂，再刷熟"
          lead="依知識點學概念，用歷屆試題與原創練習題刷題，答錯的題目自動回到複習清單。學習、練習、複習與紀錄彼此連動。"
        />
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <article key={f.title} className={styles.feature}>
              <span className={styles.featureIcon}>
                <Icon name={f.icon} size={22} />
              </span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewLoop(): ReactNode {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <SectionHeader
          kicker="錯題複習機制"
          title="答錯的題目，會一直回來找你"
          lead="把正確率從一次性的數字，變成持續追蹤的弱點清單。"
        />
        <ol className={styles.steps}>
          {reviewSteps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Coverage(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          kicker="收錄內容"
          title="4 個類科，550 題歷屆考題"
          lead="歷屆試題與答案取自考選部、交通部觀光署等主管機關公告的試題。每個類科另有依考綱整理的知識點與 CertGym 原創練習題，持續增加中。"
        />
        <div className={styles.trackGrid}>
          {tracks.map((t) => (
            <div key={t.group} className={styles.track}>
              <div className={styles.trackHead}>
                <Icon name={t.icon} size={20} />
                <span>{t.group}</span>
              </div>
              <ul className={styles.trackList}>
                {t.items.map((item) => (
                  <li key={item.name}>
                    <span className={styles.trackName}>{item.name}</span>
                    <span className={styles.trackMeta}>
                      {item.session}・{item.count} 題
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.notice}>
          <Icon name="sparkles" size={18} className={styles.noticeIcon} />
          <p>
            解析內容主要由 AI 輔助生成，僅供參考，App 內均標示「AI
            解析」。發現錯誤可從「設定 → 意見回饋」回報。CertGym
            為獨立開發的學習工具，與考選部及任何考試主管機關無隸屬或合作關係。
          </p>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <Features />
      <ReviewLoop />
      <Coverage />
    </>
  );
}
