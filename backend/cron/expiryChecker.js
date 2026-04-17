const cron = require("node-cron");
const Drug = require("../models/Drug");

const checkDrugExpiry = () => {
  cron.schedule("0 * * * *", async () => {
    // runs every hour
    console.log("Running expiry check...");

    try {
      const today = new Date();

      const next30Days = new Date();
      next30Days.setDate(today.getDate() + 30);

      const expiringDrugs = await Drug.find({
        expiry_date: { $gte: today, $lte: next30Days },
      });

      if (expiringDrugs.length > 0) {
        console.log("Drugs expiring soon:");

        expiringDrugs.forEach((drug) => {
          console.log(`${drug.drug_name} expires on ${drug.expiry_date}`);
        });
      } else {
        console.log("No drugs expiring soon");
      }
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = checkDrugExpiry;
