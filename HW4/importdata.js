const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

const filePath = 'data.json'; // 替换为你的 JSON 文件路径

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);

        const sql = 'INSERT INTO chickenData (日期, 農曆, "白肉雞(2.0Kg以上)", "白肉雞(1.75-1.95Kg)", "白肉雞(門市價高屏)", "雞蛋(產地)") VALUES (?, ?, ?, ?, ?, ?)';

        jsonData.forEach(item => {
            const params = [
                item.日期,
                item.農曆,
                item['白肉雞(2.0Kg以上)'],
                item['白肉雞(1.75-1.95Kg)'],
                item['白肉雞(門市價高屏)'],
                item['雞蛋(產地)'],
            ];

            db.run(sql, params, (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Inserted:', item);
                }
            });
        });

        db.close();
    } catch (error) {
        console.error('Invalid JSON file:', error);
    }
});
