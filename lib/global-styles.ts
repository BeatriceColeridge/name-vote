export const globalStyles = `
  :root {
    --bg: #fff8f2;
    --surface: #fffdf9;
    --surface-strong: #f7efe8;
    --text: #1e1b18;
    --muted: #5f5a54;
    --line: rgba(30, 27, 24, 0.12);
    --forest: #254441;
    --lavender: #b7a7d6;
    --blush: #f28c8c;
    --sand: #e8dccb;
    --shadow: 0 18px 40px rgba(37, 68, 65, 0.08);
    --radius-lg: 28px;
  }
  * { box-sizing: border-box; }
  html {
    background: radial-gradient(circle at top left, rgba(183, 167, 214, 0.24), transparent 36%), radial-gradient(circle at top right, rgba(242, 140, 140, 0.16), transparent 28%), var(--bg);
  }
  body {
    margin: 0;
    min-height: 100vh;
    color: var(--text);
    font-family: var(--font-body), sans-serif;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 248, 242, 0.92));
  }
  a { color: inherit; text-decoration: none; }
  button, input { font: inherit; }
  .app-shell { min-height: 100vh; max-width: 980px; margin: 0 auto; padding: 20px 16px 96px; }
  .page-shell { padding-top: 14px; }
  .page { display: grid; gap: 20px; }
  .studio-header {
    display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 16px;
    border: 1px solid var(--line); border-radius: 22px; background: rgba(255, 253, 249, 0.72);
    backdrop-filter: blur(10px); box-shadow: var(--shadow);
  }
  .studio-mark { display: grid; gap: 4px; }
  .studio-mark strong, h1, h2, h3 { font-family: var(--font-display), sans-serif; }
  .studio-mark strong { font-size: 1.05rem; letter-spacing: -0.04em; }
  .studio-mark span, .mini-label, .eyebrow { color: var(--muted); }
  .eyebrow, .mini-label { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; }
  .header-links { display: flex; align-items: center; gap: 12px; font-size: 0.92rem; }
  .wallet-button {
    border: 1px solid rgba(37, 68, 65, 0.18); background: white; color: var(--forest); border-radius: 999px;
    padding: 12px 16px; font-weight: 700; cursor: pointer; transition: transform 0.18s ease, border-color 0.18s ease;
  }
  .wallet-button:hover, .primary-button:hover, .copy-button:hover, .nav-link:hover { transform: translateY(-1px); }
  .hero-slab, .submit-stage, .archive-banner, .shortlist-header {
    display: grid; gap: 18px; padding: 22px; border-radius: 34px; border: 1px solid var(--line);
    box-shadow: var(--shadow); background: linear-gradient(160deg, rgba(255, 255, 255, 0.84), rgba(247, 239, 232, 0.78));
  }
  .hero-slab { grid-template-columns: 1.2fr 0.95fr; }
  .hero-copy h1, .submit-copy h1, .archive-banner h1, .shortlist-header h1, .detail-surface h1 {
    margin: 8px 0 10px; font-size: clamp(2rem, 7vw, 4rem); line-height: 0.95; letter-spacing: -0.06em;
  }
  .hero-copy p, .submit-copy p, .shortlist-header p, .detail-note {
    margin: 0; max-width: 34rem; color: var(--muted); font-size: 1rem; line-height: 1.55;
  }
  .hero-panel, .lead-name-panel, .summary-panel, .candidate-card, .input-panel, .detail-surface, .shortlist-card {
    border: 1px solid var(--line); border-radius: var(--radius-lg); background: rgba(255, 253, 249, 0.92); box-shadow: var(--shadow);
  }
  .hero-panel, .input-panel, .detail-surface { padding: 20px; }
  .hero-actions, .action-bar, .tag-row, .status-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .hero-actions { margin-bottom: 18px; }
  .primary-link, .secondary-link, .primary-button, .copy-button {
    display: inline-flex; align-items: center; justify-content: center; min-height: 46px; padding: 0 18px; border-radius: 16px;
    font-weight: 700; border: 1px solid transparent; cursor: pointer; transition: transform 0.18s ease, opacity 0.18s ease, border-color 0.18s ease;
  }
  .primary-link, .primary-button { background: var(--forest); color: white; }
  .secondary-link, .copy-button { background: transparent; border-color: rgba(37, 68, 65, 0.18); color: var(--forest); }
  .status-row { justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); }
  .editorial-grid, .submit-layout, .archive-layout { display: grid; gap: 18px; }
  .editorial-grid { grid-template-columns: 1.3fr 0.8fr; }
  .lead-name-panel { padding: 22px; background: linear-gradient(145deg, rgba(183, 167, 214, 0.18), rgba(255, 253, 249, 0.94)); }
  .lead-name-panel h2 { margin: 18px 0 10px; font-size: clamp(2.2rem, 8vw, 4.8rem); line-height: 0.9; letter-spacing: -0.08em; }
  .lead-name-panel p { max-width: 28rem; color: var(--muted); }
  .summary-panel { padding: 20px; display: grid; gap: 16px; }
  .summary-panel[data-accent="Warm"] { background: linear-gradient(180deg, rgba(232, 220, 203, 0.55), rgba(255, 253, 249, 0.95)); }
  .summary-panel[data-accent="Forest"] { background: linear-gradient(180deg, rgba(37, 68, 65, 0.08), rgba(255, 253, 249, 0.95)); }
  .summary-panel[data-accent="Blush"] { background: linear-gradient(180deg, rgba(242, 140, 140, 0.14), rgba(255, 253, 249, 0.95)); }
  .summary-panel[data-accent="Lavender"] { background: linear-gradient(180deg, rgba(183, 167, 214, 0.24), rgba(255, 253, 249, 0.95)); }
  .summary-list, .stack-section, .candidate-stack, .archive-list, .submit-side, .archive-rail, .shortlist-grid, .empty-state { display: grid; gap: 14px; }
  .summary-row, .section-heading, .candidate-top { display: flex; justify-content: space-between; gap: 12px; }
  .candidate-card { padding: 18px; display: grid; gap: 14px; transition: transform 0.18s ease; }
  .candidate-card:hover, .shortlist-card:hover { transform: translateY(-2px); }
  .candidate-card.compact { background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(247, 239, 232, 0.86)); }
  .candidate-top { align-items: flex-start; }
  .candidate-name { margin: 0; font-size: clamp(1.8rem, 6vw, 3rem); line-height: 0.92; letter-spacing: -0.07em; }
  .candidate-note, .field-hint, .feedback-box p, .empty-state p, .shortlist-card p { margin: 0; color: var(--muted); }
  .name-chip {
    display: inline-flex; align-items: center; justify-content: center; min-height: 30px; padding: 0 10px; border-radius: 999px;
    border: 1px solid transparent; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
  }
  .name-chip[data-status="ready"] { background: rgba(37, 68, 65, 0.1); color: var(--forest); }
  .name-chip[data-status="submitted"] { background: rgba(242, 140, 140, 0.16); color: #9b4b4b; }
  .name-chip[data-status="latest"] { background: rgba(183, 167, 214, 0.26); color: #5e477c; }
  .name-chip[data-status="shortlisted"] { background: rgba(232, 220, 203, 0.7); color: #745939; }
  .meta-pill {
    display: inline-flex; min-height: 30px; align-items: center; padding: 0 10px; border-radius: 999px;
    background: rgba(37, 68, 65, 0.06); color: var(--forest); font-size: 0.82rem;
  }
  .input-panel { display: grid; gap: 18px; background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(183, 167, 214, 0.1)); }
  .name-field { display: grid; gap: 10px; }
  .name-field label { font-size: 0.82rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
  .name-field input {
    width: 100%; min-height: 72px; padding: 0 18px; border-radius: 20px; border: 1px solid rgba(30, 27, 24, 0.16);
    background: rgba(255, 253, 249, 0.96); font-family: var(--font-display), sans-serif;
    font-size: clamp(1.7rem, 6vw, 2.8rem); letter-spacing: -0.05em; color: var(--text);
  }
  .feedback-box { display: grid; gap: 6px; padding: 14px 16px; border-radius: 18px; background: rgba(37, 68, 65, 0.06); }
  .submit-layout { grid-template-columns: 1.15fr 0.85fr; }
  .detail-page { min-height: 60vh; }
  .detail-surface { display: grid; gap: 22px; padding: 24px; background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(232, 220, 203, 0.38)); }
  .detail-meta-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .empty-state {
    padding: 24px; border-radius: var(--radius-lg); border: 1px dashed rgba(37, 68, 65, 0.24); background: rgba(255, 253, 249, 0.72);
  }
  .shortlist-card { padding: 18px; background: linear-gradient(150deg, rgba(255, 255, 255, 0.92), rgba(183, 167, 214, 0.14)); }
  .shortlist-card h2 { margin: 10px 0 8px; font-size: clamp(1.8rem, 6vw, 3rem); line-height: 0.95; letter-spacing: -0.06em; }
  .bottom-nav {
    position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); width: min(720px, calc(100% - 24px));
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; padding: 10px; border-radius: 24px; border: 1px solid var(--line);
    background: rgba(255, 253, 249, 0.88); backdrop-filter: blur(12px); box-shadow: var(--shadow);
  }
  .nav-link {
    display: grid; gap: 4px; justify-items: center; padding: 10px 8px; border-radius: 16px; color: var(--muted);
    transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;
  }
  .nav-link.active { background: rgba(37, 68, 65, 0.1); color: var(--forest); }
  .nav-link strong { font-size: 0.86rem; }
  .nav-link span { font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; }
  @media (max-width: 820px) {
    .hero-slab, .editorial-grid, .submit-layout, .archive-layout { grid-template-columns: 1fr; }
    .hero-copy h1, .submit-copy h1, .archive-banner h1, .shortlist-header h1, .detail-surface h1 { font-size: clamp(2rem, 12vw, 3.4rem); }
  }
  @media (max-width: 640px) {
    .app-shell { padding: 14px 12px 96px; }
    .studio-header { padding: 12px 14px; }
    .header-links { display: none; }
    .hero-slab, .submit-stage, .archive-banner, .shortlist-header, .lead-name-panel, .summary-panel, .candidate-card, .input-panel, .detail-surface, .shortlist-card {
      border-radius: 24px;
    }
    .detail-meta-grid { grid-template-columns: 1fr; }
  }
`;
