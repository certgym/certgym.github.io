import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "智慧閃卡複習",
    icon: "🃏",
    description: (
      <>
        以科學間隔重複法設計的閃卡功能，讓你在短時間內牢記大量考試重點。
        自訂閃卡、分類詞彙管理，讓備考事半功倍。
      </>
    ),
  },
  {
    title: "海量題庫練習",
    icon: "📝",
    description: (
      <>
        涵蓋 AWS、Azure、GCP、PMP、GEPT 等熱門證照題庫，
        支援模擬測驗與即時解析，練習更有效率，快速掌握考點規律。
      </>
    ),
  },
  {
    title: "錯題收藏分析",
    icon: "⭐",
    description: (
      <>
        自動收錄答錯題目，一鍵收藏重要考點。
        隨時複習錯題，找出知識盲點，精準提升弱項，考前衝刺更有效率。
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.glassCard}>
        <div className={styles.iconWrap}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

type ShowcaseItem = {
  gradient: string;
  placeholderIcon: string;
  title: string;
  description: string;
};

function ProductShowcase(): ReactNode {
  const features: ShowcaseItem[] = [
    {
      gradient:
        "linear-gradient(135deg, #061a2b 0%, #0c3a56 52%, #1a4a6e 100%)",
      placeholderIcon: "🃏",
      title: "閃卡高效記憶，備考事半功倍",
      description:
        "科學間隔重複法（Spaced Repetition）讓你用最少時間記住最多考點。自訂閃卡內容、分類整理、隨時隨地制點，讓記憶不再是負擔",
    },
    {
      gradient:
        "linear-gradient(135deg, #062030 0%, #093a52 52%, #0b4060 100%)",
      placeholderIcon: "📝",
      title: "模擬測驗，告別考前指數焦慮",
      description:
        "外觀真實考場的模擬測驗、計時作答與即時解析，讓你在正式考試前對題型與解題步驟了然於胸，從容應對。",
    },
    {
      gradient:
        "linear-gradient(135deg, #0a1e30 0%, #163448 52%, #0c3050 100%)",
      placeholderIcon: "⭐",
      title: "錯題收藏，精準找出弱點突破",
      description:
        "不再靠感覺記識別易錯考點。CertGym 自動收錄答錯題目、展示錯誤因素分析，助你對症下藥，每次複習都有情報支撐。",
    },
    {
      gradient:
        "linear-gradient(135deg, #05162a 0%, #0a2a3e 52%, #0d3a56 100%)",
      placeholderIcon: "📊",
      title: "學習進度追蹤，把握備考狀態",
      description:
        "直觀展示每日練習量、正確率趨勢與科目完成度，讓你清楚看到能力提升曲線，備考不再僅靠感覺而是數據說話。",
    },
    {
      gradient:
        "linear-gradient(135deg, #071a2a 0%, #0b2e44 52%, #09263c 100%)",
      placeholderIcon: "�",
      title: "社群共學，與考生互助共成長",
      description:
        "加入 CertGym 學習社群，與全台考生分享讀書筆記、考試心得、備考文章。互助的學習氛圍讓方向更明確，備考不孤單。",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="ct-section-badge">功能特色</span>
          <Heading as="h2">強大功能，讓備考變得有趣又高效</Heading>
        </div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={clsx(
              styles.showcaseRow,
              idx % 2 === 1 && styles.showcaseRowReverse,
            )}
          >
            <div className={styles.showcaseImageWrap}>
              <div
                className={styles.showcasePlaceholder}
                style={{ background: feature.gradient }}
              >
                {feature.placeholderIcon}
              </div>
            </div>
            <div className={styles.showcaseTextWrap}>
              <h3 className={styles.showcaseTitle}>{feature.title}</h3>
              <p className={styles.showcaseDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresPreamble}>
            <span className="ct-section-badge">核心優勢</span>
            <Heading as="h2">為什麼選擇 CertGym？</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}
