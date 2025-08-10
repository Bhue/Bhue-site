import { Brain, Calculator, LineChart, PieChart, NotebookPen, ShieldCheck } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: any;
  bullets: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "ml-predictive-modeling",
    title: "ML & Predictive Modeling",
    short: "Churn, credit risk, fraud, recommendation, NLP, CV. From baselines to production.",
    icon: Brain,
    bullets: [
      "Use cases: churn, CLV, PD/LGD/EAD, fraud, recsys, NLP/OCR/CV",
      "Stack: scikit-learn, XGBoost/LightGBM, PyTorch; MLflow & feature stores",
      "Delivery: baseline → ablations → explainability → deploy & monitor"
    ],
    outcomes: [
      "Higher approval with stable risk (credit)",
      "Lower false positives (fraud/AML)",
      "Increased ROAS / retention (marketing)"
    ]
  },
  {
    slug: "statistical-expertise",
    title: "Statistical Expertise",
    short: "Experimental design, A/B testing, causal inference, Bayesian, time-series.",
    icon: Calculator,
    bullets: [
      "Power analysis, CUPED, sequential tests",
      "Causal: DiD, synthetic control, IV, uplift",
      "Forecasting: ARIMA/ETS, Prophet, Bayesian hierarchical"
    ],
    outcomes: ["Faster confident decisions", "Reduced test cost", "Reliable forecasts"]
  },
  {
    slug: "analytics-engineering",
    title: "Analytics Engineering",
    short: "Data modeling, feature stores, MLOps/CI-CD, observability, governance.",
    icon: LineChart,
    bullets: [
      "Pipelines: dbt, Airflow, Spark; data contracts & tests",
      "MLOps: registry, canary, drift/perf monitoring",
      "Docs & runbooks for reproducibility"
    ],
    outcomes: ["Stable data layer", "Fewer breakages", "Faster model iteration"]
  },
  {
    slug: "bi-decisioning",
    title: "BI & Decisioning",
    short: "KPI trees, dashboards, experimentation hubs, decision playbooks.",
    icon: PieChart,
    bullets: [
      "Power BI / Looker / Tableau with drilldowns",
      "Experimentation hub & guardrails",
      "Decision playbooks with action thresholds"
    ],
    outcomes: ["Shared truth on KPIs", "Fewer meetings", "Actionable insights"]
  },
  {
    slug: "data-strategy",
    title: "Data Strategy",
    short: "Roadmaps, org design, hiring, vendor selection, capability programs.",
    icon: NotebookPen,
    bullets: [
      "Roadmaps tied to P&L and data reality",
      "Operating model, roles, skill matrix",
      "Build vs buy, RFPs, budget planning"
    ],
    outcomes: ["Aligned investment", "Right team structure", "Lower tool bloat"]
  },
  {
    slug: "risk-compliance",
    title: "Risk & Compliance",
    short: "Model risk management, bias/fairness, PDPA/GDPR, reproducibility.",
    icon: ShieldCheck,
    bullets: [
      "Model inventory, validation docs, challenge tests",
      "Bias/fairness assessment & remediation",
      "PII controls, lineage, audit trails"
    ],
    outcomes: ["Audit-ready models", "Reduced regulatory risk", "Trustworthy AI"]
  }
];
