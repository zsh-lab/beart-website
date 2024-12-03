import puppeteer from 'puppeteer';
import fs from 'fs/promises';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://beart.ai/'); // 替换为项目运行时的 URL

    const html = await page.content();
    await fs.writeFile('dist/index.html', html);

    await browser.close();
})();