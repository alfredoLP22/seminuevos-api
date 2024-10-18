# Seminuevos API

This project automates the process of posting an ad on [seminuevos.com](https://www.seminuevos.com) using Puppeteer and provides a REST API built with Node.js and Express.

## Features

- Automates login to `seminuevos.com`.
- Posts an ad with configurable parameters (price, description, etc.).
- Takes a screenshot of the published ad and stores it locally.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-repo/seminuevos-api.git
```

2. Navigate to the project folder:
cd seminuevos-api

3. Install dependencies:
npm install

4. Create the uploads/ directory if it doesn't already exist:
mkdir uploads

5. To run the server in development mode using nodemon:
npm run dev

6. To run the server in production mode:
npm start

