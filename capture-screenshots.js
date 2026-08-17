const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const projects = [
  { slug: "mixxer", url: "https://mixxerapp.vercel.app/", output: "mixxer.png" },
  { slug: "dewis", url: "https://dewis.netlify.app/", output: "dewis.png" },
  { slug: "amexio", url: "https://amexiofuse.netlify.app/", output: "amexio.png" },
  { slug: "next-merce", url: "https://nextmercee.netlify.app/", output: "next-merce.png" },
  { slug: "blossend", url: "https://blossend.netlify.app/", output: "blossend.png" },
  { slug: "openpro", url: "https://open-my-pro-alpha.vercel.app/", output: "openpro.png" },
  { slug: "taskflowpro", url: "https://taskflow-sync.netlify.app/login", output: "taskflowpro.png" }
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  for (const project of projects) {
    console.log(`Capturing screenshot for ${project.slug} from ${project.url}...`);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 60000 });
      
      const outputPath = path.join(__dirname, 'public', project.output);
      await page.screenshot({ path: outputPath });
      console.log(`Successfully saved ${project.output}`);
      await page.close();
    } catch (error) {
      console.error(`Failed to capture ${project.slug}:`, error.message);
    }
  }

  await browser.close();
  console.log('All done!');
}

captureScreenshots();
