var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config');

var indexRouter = require('./routes/index');
var pagesRouter = require('./routes/pages');


var app = express();


///application level middleware called between all the request
app.use(function (req, res, next) {
  //console.log(req.originalUrl)
  next();
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', pagesRouter);//localhost:3000/about



// catch 404 and forward to error handler
app.use( function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




if(process.env.NODE_ENV =="development"){
  console.log("dont send email")
}
else if(process.env.NODE_ENV =="staging"){
  console.log(" send emails")
  
}
module.exports = app;
