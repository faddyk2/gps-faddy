#!/usr/bin/env node

const puppeteer = require('puppeteer');

async function getDistanceBetweenCities(origin, destination) {
    const minargs = [
        "--autoplay-policy=user-gesture-required",
        "--disable-background-networking",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-breakpad",
        "--disable-client-side-phishing-detection",
        "--disable-component-update",
        "--disable-default-apps",
        "--disable-dev-shm-usage",
        "--disable-domain-reliability",
        "--disable-extensions",
        "--disable-features=AudioServiceOutOfProcess",
        "--disable-hang-monitor",
        "--disable-ipc-flooding-protection",
        "--disable-notifications",
        "--disable-offer-store-unmasked-wallet-cards",
        "--disable-popup-blocking",
        "--disable-print-preview",
        "--disable-prompt-on-repost",
        "--disable-renderer-backgrounding",
        "--disable-setuid-sandbox",
        "--disable-speech-api",
        "--disable-sync",
        "--hide-scrollbars",
        "--ignore-gpu-blacklist",
        "--metrics-recording-only",
        "--mute-audio",
        "--no-default-browser-check",
        "--no-first-run",
        "--no-pings",
        "--no-sandbox",
        "--no-zygote",
        "--password-store=basic",
        "--use-gl=swiftshader",
        "--use-mock-keychain"
    ];

    const browser = await puppeteer.launch({
        headless: true,
        args: minargs
    });

    const page = await browser.newPage();

    await page.goto(`https://www.google.com/maps/dir/${origin}/${destination}`);

    try {
        await page.waitForSelector(".ivN21e");

        const distanceElement = await page.$(".ivN21e");
        const distance = await page.evaluate(element => element.textContent, distanceElement);
      

        await browser.close();

        return distance;
    } catch (error) {
        await browser.close();
        return `Error: ${error.message}`;
    }
}

module.exports = getDistanceBetweenCities;

if (require.main === module) {
    const [origin, destination] = process.argv.slice(2);
    getDistanceBetweenCities(origin, destination)
        .then(distance => console.log("Distance:", distance))
        .catch(error => console.error("Error:", error));
}
