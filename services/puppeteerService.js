import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const publishAd = async (price, description) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto("https://www.seminuevos.com/login");

    await page.type("#email", "your-email@example.com");
    await page.type("#password", "your-password");
    await page.click("#login-button");
    await page.waitForNavigation();

    await page.goto("https://www.seminuevos.com/post");

    await page.select("#vehicleType", "autos");
    await page.select("#make", "Acura");
    await page.select("#model", "ILX");
    await page.select("#subType", "Sedán");
    await page.select("#year", "2018");
    await page.select("#state", "Nuevo León");
    await page.select("#city", "Monterrey");
    await page.type("#mileage", "20000");
    await page.type("#price", price);
    await page.select("#transactionType", "negotiable");
    await page.type("#description", description);

    const imageInputs = await page.$$('input[type="file"]');
    const imagePaths = [
      path.join(__dirname, "../uploads/image1.jpg"),
      path.join(__dirname, "../uploads/image2.jpg"),
      path.join(__dirname, "../uploads/image3.jpg"),
    ];

    for (let i = 0; i < imageInputs.length; i++) {
      await imageInputs[i].uploadFile(imagePaths[i]);
    }

    await page.click("#freePackage");

    await page.click("#publishButton");
    await page.waitForNavigation();

    const screenshotPath = path.join(__dirname, "../uploads/ad_screenshot.png");
    await page.screenshot({ path: screenshotPath });

    await browser.close();

    return screenshotPath;
  } catch (error) {
    console.error("Error while publishing the ad:", error);
    await browser.close();
    throw error;
  }
};

export default {
  publishAd,
};
