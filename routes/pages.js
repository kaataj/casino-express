var express = require('express');
var router = express.Router();
require('isomorphic-fetch');


/* GET home page. */
router.get('/about', function(req, res, next) {

    var data = { 
        title: 'about ' 
    };
    res.render('about', data);
});
//This tells our application what 
//happens when we write /contact-us
router.get('/contact-us', function(req, res, next) {
    var data = { 
        title: 'Contact us', 
        success:false,
    };

    res.render('contact-us', data);
});

router.post('/contact-us', function(req, res, next) {
    var data = { 
        title: 'Contact us', 
        success:false,
    };

    res.render('contact-us', data);
});

router.get('/sign-up', function(req, res, next) {
  // console.log(req.body);
   const name = req.body.fname;
   const surname = req.body.lname;

    var data = { 
        title: 'Sign up', 
        success:"false",
    };

     res.render('sign-up', {title: 'Sign up', success:"false"});
});

router.post('/sign-up', function(req, res, next) {

    var data = { 
        success:"true",
     }
     //validation 
     //add to database
     fetch('http://localhost:3000/users', {
  method: 'post',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(req.body)
}).then(function(data) {

        return data.json();
    })
    .then(function(response) {
      res.render('sign-up',data);

    }).catch(function(error) {
      res.render('error', {});
    });
});


router.get('/user-details/:id',  function(req, res, next) {
    
    var data = { 
        success:"true",
        user:false,
     }

     const {id} = req.params

     console.log()
     //validation 
     //add to database
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        }).then(function(data) {
        return data.json();
    })
    .then(function(user) {
 
        data.user = user;

        res.render('user-details',data);

    }).catch(function(error) {
        console.log(error)
        res.render('error', data);
    });
});


//this is for proccess the form reques body
router.post('/user-details', function(req, res, next) {
console.log("i am form data", req.body)
    var data = { 
        success:"true",

     }
     //validation 
     //add to database
     fetch('http://localhost:3000/users', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req.body)
        }).then(function(data) {
        return data.json();
    })
    .then(function(farting) {

        data.user = farting;

        res.render('user-details',data);

    }).catch(function(error) {
        console.log(error)
        res.render('error', data);
    });
});


router.get('/log-in', function(req, res, next) {
    // console.log(req.body);
     const name = req.body.fname;
     const surname = req.body.lname;
  
      var data = { 
          title: 'Log in', 
          success:"false",
      };
  
       res.render('log-in', {title: 'Log in', success:"false"});
  });

router.post('/log-in', function(req, res, next) {

    var data = { 
        success:"true",
     }
     //validation 
     //add to database
     fetch('http://localhost:3000/users', {
  method: 'post',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(req.body)
}).then(function(data) {

        return data.json();
    })
    .then(function(response) {
      res.render('log-in',data);

   }).catch(function(error) {
  res.render('error', {});
    });
});




module.exports = router;