const fs = require("fs").promises;
const path = require("path");

module.exports = {
  async up(queryInterface) {
    let dataArray = await fs.readFile(
      path.join(__dirname, "seed_data", "topics.txt"),
      "utf8"
    );
    dataArray = dataArray
      .split("\n")
      .slice(1, -1)
      .map((x) => ({
        topic_name: x,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert("Topics", dataArray, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
