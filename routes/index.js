var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


/* GET home page. */
router.get('/',function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function(req, res, next) {
//here we define what will haped only the the homepage is displayed
var data = { 
  title: 'happy day ' ,
  heading2: 'happy day to you too',
  meta:"i ove meta",
  days:["Sunday","Monday","Tus","ujk"],
  users: []
};

fetch('http://localhost:3000/users', {
  method: 'get',
  headers: {'Content-Type': 'application/json'}
}).then(function(data) {

        return data.json();

    })
    .then(function(users) {

       data.users = users;
        
      res.render('index', data);

    }).catch(function(error) {
      res.render('error', data);
    });
});



router.get('/single-page-app', function(req, res, next) {

  res.render('single-page', {name:"shlomi"});
});

 
console.log("app started")


module.exports = router;
