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
    icon: "listChecks",
    title: "題庫練習",
    description:
      "依類科、梯次、科目挑選範圍，自訂每回題數。作答後立即顯示正確答案與解析。",
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
      "同一份題庫換個方式讀。點一下翻面看答案，通勤、排隊的零碎時間也能複習。",
  },
  {
    icon: "rotateCcw",
    title: "錯題複習",
    description:
      "答錯的題目自動進入待複習清單，連續答對兩次才算精熟，不會刷完一輪就忘。",
  },
  {
    icon: "bookmark",
    title: "收藏與集合",
    description:
      "把想再看的題目收進自訂集合，依考試或科目分類，整個集合可以直接開始練習。",
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
      "設定提醒時間與出題範圍，每天推播一題，點開通知就能作答，維持讀書節奏。",
  },
  {
    icon: "wifiOff",
    title: "離線使用",
    description:
      "第一次開啟下載題庫後即可離線練習，搭捷運、在圖書館沒有網路也不受影響。",
  },
];

const reviewSteps = [
  {
    title: "作答",
    description: "分科刷題或整份模擬考，答完立即看解析。",
  },
  {
    title: "進入待複習",
    description: "答錯的題目自動排入該類科的待複習清單。",
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
  gym: string;
  items: { name: string; session: string; count: number }[];
};

const tracks: Track[] = [
  {
    icon: "scale",
    gym: "法律司法道館",
    items: [{ name: "律師", session: "115 年第一試", count: 300 }],
  },
  {
    icon: "stethoscope",
    gym: "醫護道館",
    items: [{ name: "護理師", session: "115 年第一次", count: 250 }],
  },
  {
    icon: "calculator",
    gym: "財經地政道館",
    items: [{ name: "會計師", session: "111 年專技高考", count: 150 }],
  },
  {
    icon: "landmark",
    gym: "公職道館",
    items: [
      { name: "地方特考三等 一般民政", session: "114 年", count: 110 },
      { name: "地方特考三等 資訊處理", session: "114 年", count: 60 },
    ],
  },
  {
    icon: "plane",
    gym: "觀光旅遊道館",
    items: [
      { name: "華語導遊", session: "112 年普考", count: 150 },
      { name: "華語領隊", session: "112 年普考", count: 150 },
    ],
  },
  {
    icon: "cpu",
    gym: "科技認證道館",
    items: [
      { name: "iPAS AI 應用規劃師 初級", session: "114 年第四次", count: 100 },
    ],
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
          title="一套題庫，四種練法"
          lead="分科刷題、整份模擬考、閃卡、錯題複習共用同一份歷屆試題，練習紀錄與收藏彼此連動。"
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
          title="8 個類科，1,270 題歷屆考題"
          lead="題目與答案取自考選部、交通部觀光署等主管機關公告的歷屆試題，持續增加中。"
        />
        <div className={styles.trackGrid}>
          {tracks.map((t) => (
            <div key={t.gym} className={styles.track}>
              <div className={styles.trackHead}>
                <Icon name={t.icon} size={20} />
                <span>{t.gym}</span>
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
            解析主要由 AI 輔助生成，僅供參考，App 內均標示「AI
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
