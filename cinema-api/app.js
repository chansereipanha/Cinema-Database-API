var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/userRoute');
var movieRouter = require('./routes/movieRoute');
var bookingRouter = require('./routes/bookingRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/api/movies', movieRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/users', userRouter);

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


mongoose.set("strictQuery", false);
const mongoDB = 'mongodb+srv://CinemaAdmin:Cinema01@cinema.z6jp1.mongodb.net/?retryWrites=true&w=majority&appName=Cinema';
main().catch((err) => console.log(err));
async function main(){
  await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
}




module.exports = app;
