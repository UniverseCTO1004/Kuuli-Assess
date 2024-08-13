const puppeteer = require("puppeteer");

async function scrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://members.collegeofopticians.ca/Public-Register");

  // Handle dynamic content and pagination here
  const data = await page.evaluate(() => {
    // Extract data from the page
    return Array.from(document.querySelectorAll(".result")).map((row) => ({
      name: row.querySelector(".name").innerText,
      registration: row.querySelector(".registration").innerText,
    }));
  });

  await browser.close();
  return data;
}

scrape().then(console.log).catch(console.error);
