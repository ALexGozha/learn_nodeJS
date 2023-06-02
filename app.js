// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();

const name = process.argv[2] || 'Alex'

const message = `Hello ${name}`

// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end(message);
});
// http://localhost:3000/
app.get('/summa/:a/:b', async(req,res)=> {
    const {a,b} = req.params;
    res.end(`Summa ${+a} + ${+b} = ${a+b}`)
  })
// http://localhost:3000/summa/5/8

  app.get('/query', async (req, res) => {
    res.end(JSON.stringify(req.query,null,2))
  })
  // http://localhost:3000/query?param1=test&param2=test2&nnnnn=nnnn
// начинаем прослушивание подключений на 3000 порту
app.listen(3000,()=>console.log('server has been startsd...'));