'use strict'
const http = require('http'),
    https = require('https')
    // database = require("../database");

    const data = { username: 'example' };
    //
const getPostApiTrain =  function(req, res, next) {
  // res.render('api/traindiary/:id/:command', {output: req.params.id.command})
  // console.log('api/traindiary/', {output: req.params})
    // console.log({ status: 'SUCCESS' })
    // console.log('req.body.name', req.body['fname'])
  };
  


// const users = [
//   {name:'Peter'},
//   {name: 'Alex'}
//   ]


// const user = req.body["fname"]
  // console.log(users)
  // console.log(user)
  // users.push(user)
  // res.status(201).send('Created')
  
  
  // req.write(`Full name is:${req.body.json}`)
    // console.log(`Full name is:${req.body.json}`);
    // console.log(JSON.stringify(req.body))
    // let fname = req.body['fname']
    // console.log(req.body)
    // res.status(201).send(user)
    // res.send({ status: 'SUCCESS' })


  // const port = 20144;
  
  // app.listen(port, () => {
  //   console.log(`Server running on port${port}`);
  // });
//   const data = JSON.stringify({
//     name: 'John Doe',
//     job: 'Content Writer'
//   });

//   const options = {
//     hostname: 'reqres.in',
//     path: '/api/traindiary',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': data.length
//     }
// };   


  // req = https.request(options, (res) => {
  //     let data = '';
  
  //     console.log('Status Code:', res.statusCode);
  
  //     res.on('data', (chunk) => {
  //         data += chunk;
  //     });
  
  //     res.on('end', () => {
  //         console.log('Body: ', JSON.parse(data));
  //     });
  
  // }).on("error", (err) => {
  //     console.log("Error: ", err.message);
  // });
  
  // req.write(data);
  // req.end();
  // res.end()   
  





  // console.log(JSON.stringify(req.body));
  // console.log('req.body.name', req.body['test']);

// }
 
module.exports = getPostApiTrain
// console.log(JSON.stringify(req.body));

//     console.log('req.body.name', req.body['name']);
// });






// const alias = req.params.alias,
// target = req.body.target

// database.createDate(alias, target, err => {
// if (err) {
//     return res.status(500).end() //interner Serverfehler
// }
// res.status(201).end()// created
// })
