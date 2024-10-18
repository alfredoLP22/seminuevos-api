import puppeteerService from "../services/puppeteerService.js";

export const publishAd = async (req, res) => {
  try {
    const { price, description } = req.body;
    const screenshot = await puppeteerService.publishAd(price, description);
    res.json({ message: "Ad published successfully", screenshot });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error publishing ad", error: error.message });
  }
};
