/**
 * how much BTC is requested in limit orders
 */

// const _ = require("lodash");
// https://www.npmjs.com/package/coinbase-pro
const CoinbasePro = require("coinbase-pro");
const publicClient = new CoinbasePro.PublicClient();

(async () => {
  publicClient.getProductOrderBook(
    "BTC-USD",
    { level: 3 },
    (error, response, data) => {
      if (error) console.error(error);

      let totalLimitBTC = 0;
      data.bids.forEach(bid => totalLimitBTC += Number(bid[1]));

      console.log(`total Limit Orders for BTC ${totalLimitBTC}`);

      let totalBTC = 511000;
      let finalPrice = 0;
      const sortedData = data.bids.sort((a, b) => a[0] > b[0] ? 1 : 0);
      for (let i = 0; i < sortedData.length; i++) {
        if (totalBTC > 0) {
          totalBTC -= Number(sortedData[i][1]);
        } else {
          finalPrice = sortedData[i - 1][0];
          console.log(`reached bottom at ${i} out of ${sortedData.length}`);
          break;
        }
      }

      console.log(`The USD price would be ${finalPrice} if all the bitocin that coinbase has ran out`)
    }
  );
})();