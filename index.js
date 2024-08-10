const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
const express = require('express');
const app = express();
const path = require('node:path');


app.set('view engine', 'ejs');
// publicディレクトリ以下のファイルを静的ファイルとして配信
app.use('/static', express.static(path.join(__dirname, 'public')));

const logMiddleWare = (req, res, next) => {
    console.log(req.method, req.path);
    next();
}

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });

async function main(){
    await client.connect();
    const db = client.db('my-app');
    app.listen(3000, () => {
        // サーバー起動後に呼び出されるCallback
        console.log('start listening');
      });
    app.get('/', logMiddleWare, async (req,res)=>{
        const shops = await db.collection('shop').find().toArray();
        const names = shops.map((shop)=>{
            return shop.name;
        })
        res.render(
            path.join(__dirname, 'views', 'index.ejs'),
            { shops: names }
          );
        
    })

    app.post('/api/user', express.json(), async (req, res) => {
        const name = req.body.name;
        if (!name) {
          res.status(400).send('Bad Request');
          return;
        }
        await db.collection('user').insertOne({ name: name });
        res.status(200).send('Created');
      });

      
}
main()
