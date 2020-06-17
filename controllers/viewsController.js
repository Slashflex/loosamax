const path = require('path');
const catchAsync = require('../utils/catchAsync');

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === 'booking')
    res.locals.alert =
      'Your booking was successful! Booked tour will show up here shortly!';
  next();
};

exports.getIndex = catchAsync(async (req, res, next) => {
  // 1) Filter the 3 best rated tours
//   const tours = await Tour.find({
//     ratingsAverage: { $gte: 4 }
//   }).limit(3);

//   // 2) rating[gte]=5&limit=2
//   const reviews = await Review.find({
//     rating: { $gt: 4.8 }
//   }).limit(2);

  // 2) Render template using data from 1)
  res.status(200).render('index');
});

exports.getApiDoc = catchAsync(async (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, './../public/api-doc.html'), {
    title: 'Api documentation'
  });
});
