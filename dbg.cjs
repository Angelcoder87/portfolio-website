const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://angelcoder87.github.io/portfolio-website/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  for (const sel of ['#about', '#work']) {
    await page.evaluate(s => document.querySelector(s).scrollIntoView({ block: 'start', behavior: 'instant' }), sel);
    await page.waitForTimeout(1500);
    const info = await page.evaluate(s => {
      const sec = document.querySelector(s);
      const r = sec.getBoundingClientRect();
      const abs = [r.left, r.top + window.scrollY, r.left + r.width, r.top + window.scrollY + r.height];
      const inside = [];
      document.querySelectorAll('.glass, .glass-soft').forEach(e => {
        const b = e.getBoundingClientRect();
        const a = [b.left, b.top + window.scrollY, b.left + b.width, b.top + window.scrollY + b.height];
        if (a[0] >= abs[0]-30 && a[2] <= abs[2]+30 && a[1] >= abs[1]-30 && a[3] <= abs[3]+30)
          inside.push({ cls: e.className.slice(0, 40), txt: (e.textContent||'').trim().slice(0,20), rect: a.map(v => Math.round(v)) });
      });
      return { abs: abs.map(v => Math.round(v)), scrollY: window.scrollY, count: inside.length, inside: inside.slice(0, 4) };
    }, sel);
    console.log(sel, JSON.stringify(info, null, 1).slice(0, 600));
  }
  await browser.close();
})();
