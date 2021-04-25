const express = require('express')
const app = express()
const port = 3000

const models = require("./models/index");
models.sequelize.sync();

app.set('view engine', 'pug');

// bodyParser 사용을 위해 추가
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * 메인 첫 Index
 */
app.get('/', (req, res) => {
    models.List.findAll().then(result => {
        let lists = [];
        result.map((data) => {
            lists.push(data.name)
        })
        res.render('index', {
            lists: lists, 
            title: "이지스 예제",
            listLength: lists.length,
            description: "* Aegis docker 실행 node 예제"
        })
    }).catch(err => {
        console.error(err);
        res.status(404).send("index 에러가 발생하였습니다.");
    })
})

/**
 * 리스트 추가
 */
app.post('/add_list', (req, res) => {
    // input tag 에서 받은 내용
    let content = req.body.content;

    models.List.create({
        name: content
    }).then(() => {
        console.log(content + "가 추가되었습니다.");
        res.redirect('/');
    }).catch(err => {
        console.error(err);
        res.status(404).send("add_list 에러가 발생하였습니다.");
    })
})

app.listen(port, () => {
    console.log(`connected http://localhost:${port}`)
})