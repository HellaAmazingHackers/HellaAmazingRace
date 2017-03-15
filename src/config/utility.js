exports.isLoggedIn = (req, res, next) => {
  if (req.url ==='/') {
    next();
  } else if (req.user) {
    next();
  } else {
    console.log('not logged in');
    res.redirect('/');
  }
}