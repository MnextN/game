const path = require('path');
const fs = require('fs').promises;

module.exports = {
    async up(queryInterface) {
        let dataArray = await fs.readFile(
            path.join(__dirname, 'seed_data', 'questions.txt'),
            'utf8'
        );
        dataArray = dataArray
            .split('\n')
            .slice(1, -1)
            .map((x) => x.split(','))
            .map((x) => ({
                question_text: x[0],
                question_price: +x[1],
                question_answer: x[2],
                id_topic: +x[3],
                createdAt: new Date(),
                updatedAt: new Date(),
            }));
        console.log(dataArray);
        await queryInterface.bulkInsert('Questions', dataArray, {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('Questions', null, {});
    },
};
