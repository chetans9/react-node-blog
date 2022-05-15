var createError = require('http-errors');
var express = require('express');
require('dotenv').config();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('./config/passport');



var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
let postRouter = require('./routes/postsRoutes');
let categoriesRouter = require('./routes/categoriesRoutes');
let profileRoutes = require('./routes/profileRoutes');


var app = express();

var corsOptions = {
  origin: ['http://localhost:4001'],
  optionsSuccessStatus: 200
}



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Set application  base URL based on requst : 
app.use((req,res,next) => {
  req.hostUrl = req.protocol + '://' +  req.get('host');
  next();

});
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/posts',postRouter);
app.use('/categories',categoriesRouter);
app.use('/profile',profileRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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

module.exports = app;
