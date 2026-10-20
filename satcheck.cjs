const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://angelcoder87.github.io/portfolio-website/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const sections = [['hero','#home'],['about','#about'],['services','#services'],['skills','#skills'],['work','#work'],['process','#process'],['contact','#contact']];
  for (const [name, sel] of sections) {
    await page.evaluate(s => document.querySelector(s).scrollIntoView({ block: 'start', behavior: 'instant' }), sel);
    await page.waitForTimeout(1500);
    const rects = await page.evaluate(s => {
      const sec = document.querySelector(s);
      const out = { section: null, cards: [] };
      const r = sec.getBoundingClientRect();
      out.section = [r.left, r.top + window.scrollY, r.left + r.width, r.top + window.scrollY + r.height];
      document.querySelectorAll('.glass, .glass-soft').forEach(e => {
        const b = e.getBoundingClientRect();
        out.cards.push([b.left, b.top + window.scrollY, b.left + b.width, b.top + window.scrollY + b.height]);
      });
      return out;
    }, sel);
    await page.screenshot({ path: `sat-${name}.png`, fullPage: true });
    require('fs').writeFileSync(`sat-${name}.json`, JSON.stringify(rects));
  }
  console.log('captured all sections');
  await browser.close();
})();
