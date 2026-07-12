# EcoSphere - Odoo-Integrated ESG Management Portal

Welcome to **EcoSphere**, a production-ready, fully interactive ESG (Environmental, Social, Governance) Management Portal integrated with Odoo ERP. This project is built for the 2026 Odoo Hackathon to address the SEBI BRSR reporting mandates for Indian enterprises.

---

## 🎯 The System Prompt (Project Concept)
If you want to describe or re-generate this project using AI, here is the comprehensive concept prompt:

> **Prompt:** 
> "Design and build a premium, highly responsive React enterprise web application representing a fully-functional Odoo 17-styled ESG Management Portal shell. The application must completely bypass static placeholders, utilizing React state to drive live calculation grids, logs, and form entries. 
>
> **Key specifications:**
> 1. **Authentication Portal:** A clean login, registration, password reset, and verification interface with live input validation.
> 2. **Bento-Grid Dashboard:** Real-time weighted ESG scores (Environmental 40%, Social 30%, Governance 30%), department ranking leaderboards, and recent log feeds.
> 3. **Interactive Carbon Ledger:** A searchable ledger for Scope 1, 2, and 3 carbon transactions supporting real-time additions (using Odoo-styled dialog inputs) and item deletions.
> 4. **Gamified Social Impact Hub:** Tracking employee volunteer hours, XP progressions, milestone badges, and completion proof uploads with live progress bars.
> 5. **Governance Board:** A corporate compliance checklist for policy sign-offs, scheduled audit timelines, and compliance issue resolution logs.
> 6. **Global ESG Insights & Analytics:** Executive metrics tracking YoY Carbon Neutrality, Gender Diversity index, S&P 500 peer benchmarking bar charts, and a pulsing operational map hotspot tracker.
> 7. **Custom Reports Builder:** Advanced query filtering with real-time log outputs and a working CSV spreadsheet export compiler.
> 8. **Supplier Performance:** Scope 3 supply chain auditing cards with ISO 14001 validation status.
> 9. **Design Aesthetics:** Use a premium dark-accented enterprise color scheme (Emerald Green `#006948`, Royal Blue `#0051d5`, Soft Slate-Blue background `#f8f9ff`). Use native Lucide React icons for fully offline-ready performance. Double-check that all components compile with zero TypeScript errors or warnings."

---

## 🚀 Key Modules & Functional Features

* **Enterprise Login & Session Management:** Authenticate securely to open the dashboard workspace.
* **Scope 1/2/3 Carbon Ledger:** Log industrial carbon transactions dynamically; calculations auto-propagate to primary ESG scores.
* **CSR Gamification Rack:** Track employee participation, claim XP awards, and unlock milestone badges in real-time.
* **SEBI Compliance Sign-off:** Check off corporate policies and schedule operational audits.
* **Strategic AI Assistant:** Review opportunities, risk alerts, and peer benchmark indexes compiled in real-time.
* **Reports Generator:** Custom query ESG logs and export them directly to downloadable `.csv` spreadsheets.
* **Pitch Deck Presentation Side-Drawer:** A slide-out panel outlining the project's background, team roster, and tech stack.

---

## 🛠️ Technology Stack

* **Core Framework:** React 18, TypeScript (TSX)
* **Build System:** Vite 6
* **Styling (CSS):** Tailwind CSS 4 (integrated via `@tailwindcss/vite` in `vite.config.ts`, theme tokens located in `src/index.css`)
* **Animations:** Framer Motion (slide transitions and drawer animations)
* **Icons:** Lucide React (offline-ready, zero CDN dependencies)

---

## 💻 Local Development Setup

To run this project locally, navigate to the project directory and execute:

```bash
# 1. Install dependencies
npm install

# 2. Run the Vite development server (hot-reloading)
npm run dev

# 3. Compile the production build
npm run build
```

The application will be served at: **`http://localhost:5173/`**
