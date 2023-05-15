var express = require('express');
var router = express.Router();

sqlite = require('sqlite3').verbose();
db = new sqlite.Database("./db.sqlite", sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

// 請求所有資料
router.get('/', function (req, res, next) {
    const selectedDate = req.query.日期; // 获取日期参数

    let sql = "SELECT * FROM chickenData";
    let params = [];

    if (selectedDate) {
        sql += " WHERE 日期 = ?";
        params.push(selectedDate);
    }

    db.all(sql, params, (err, rows) => {
        if (err) {
            throw err;
        }

        if (selectedDate) {
            console.log("找到数据");
        } else {
            console.log("全部数据");
        }

        res.send(rows);
    });
});


router.post('/', (req, res) => {
    const { date, lunar, chicken1, chicken2, chicken3, egg } = req.body;
    const sql = 'INSERT INTO chickenData (日期, 農曆, "白肉雞(2.0Kg以上)", "白肉雞(1.75-1.95Kg)", "白肉雞(門市價高屏)", "雞蛋(產地)") VALUES (?, ?, ?, ?, ?, ?)';
    const params = [date, lunar, chicken1, chicken2, chicken3, egg];
    db.run(sql, params, (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err.message);
        }
        console.log('Inserted');
        return res.status(200).send('Inserted');
    });
});


module.exports = router;
