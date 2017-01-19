var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var _ = require('underscore');

router.get('/hatter', getHatter);
router.get('/hatter/:id', getHatte);
router.get('/shirts', getShirts);
router.get('/shirts/:id', getShirt);
router.get('/trousers', getTrousers);
router.get('/trousers/:id', getTrouser);
router.get('/shoes', getShoes);
router.get('/shoes/:id', getShoe);
router.get('/statistics/football', getFootballStatistics);
router.get('/statistics/handball', getHandballStatistics);
router.get('/statistics/tennis', getTennisStatistics);
router.get('/users', getUsers);
router.get('/users/:id/favorites', getFavorites);
router.post('/users/favorites', addFavorite);
router.delete('/users/favorites', removeFavorite);
router.get('/users/:id/wishes', getWishes);
router.get('/users/:id/wishes/:wid', getWish);
router.post('/users/wishes', addWish);
router.delete('/users/wishes', removeWish);
router.get('/users/:id/preferences', getUserPreferences);
router.post('/users/:id/preferences', setUserPreferences);
router.get('/users/:username/:password', getUser);
router.get('/login/:username/:password', login);
router.get('/news', getNews);
router.get('/limitedOffer', getLimitedOffer);
router.get('/offer', getOffer);
router.get('/sports', getSports);
router.get('/teams', getTeams);

router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getHatter(req, res, next) {
  res.status(200).send(data.hatter);
}

function getHatte(req, res, next) {
  var id = +req.params.id;
  var hatte = data.hatter.filter(function (h) {
    return h.id === id;
  })[0];

  if (hatte) {
    res.status(200).send(hatte);
  } else {
    four0four.send404(req, res, 'Hætte ' + id + ' not found');
  }
}
function getShirts(req, res, next) {
  res.status(200).send(data.shirts);
}

function getShirt(req, res, next) {
  var id = +req.params.id;
  var shirt = data.shirts.filter(function (s) {
    return s.id === id;
  })[0];

  if (shirt) {
    res.status(200).send(shirt);
  } else {
    four0four.send404(req, res, 'Shirt ' + id + ' not found');
  }
}
function getTrousers(req, res, next) {
  res.status(200).send(data.trousers);
}

function getTrouser(req, res, next) {
  var id = +req.params.id;
  var trouser = data.trousers.filter(function (h) {
    return h.id === id;
  })[0];

  if (trouser) {
    res.status(200).send(trouser);
  } else {
    four0four.send404(req, res, 'Trouser ' + id + ' not found');
  }
}
function getShoes(req, res, next) {
  res.status(200).send(data.shoes);
}

function getShoe(req, res, next) {
  var id = +req.params.id;
  var shoe = data.shoes.filter(function (h) {
    return h.id === id;
  })[0];

  if (shoe) {
    res.status(200).send(shoe);
  } else {
    four0four.send404(req, res, 'Shoe ' + id + ' not found');
  }
}

function getFootballStatistics(req, res, next) {
  res.status(200).send(data.footBallStatistics);
}
function getHandballStatistics(req, res, next) {
  res.status(200).send(data.handballStatistics);
}
function getTennisStatistics(req, res, next) {
  res.status(200).send(data.tennisStatistics);
}

function getUsers(req, res, next) {
  res.status(200).send(data.users);
}

function getUser(req, res, next) {
  var user = data.users.filter(function (u) {
    return u.username === req.params.username && u.password === req.params.password;
  })[0];

  if (user) {
    var preferences = data.getUserPreferences(user.id);
    user.preferences = preferences;
    res.status(200).send(user);
  } else {
    four0four.send404(req, res, 'User ' + req.params.username + ' with pass: ' + req.params.password + ' not found');
  }
}
function login(req, res, next) {
  if (!req.params.username || !req.params.password) {
    res.status(200).send({message: 'Invalide username or password'});
    return;
  }
  var user = data.users.filter(function (u) {
    return u.username === req.params.username && u.password === req.params.password;
  })[0];

  if (user) {
    var preferences = data.getUserPreferences(user.id);
    user.preferences = preferences;
    res.status(200).send(user);
  } else {
    four0four.send404(req, res, 'User ' + req.params.username + ' with pass: ' + req.params.password + ' not found');
  }
}

function getNews(req, res, next) {
  res.status(200).send(data.news);
}
function getSports(req, res, next) {
  res.status(200).send(data.sports);
}
function getTeams(req, res, next) {
  res.status(200).send(data.teams);
}

function getLimitedOffer(req, res, next) {
  res.status(200).send(data.limitedOffer);
}
function getOffer(req, res, next) {
  res.status(200).send(data.offer);
}

function getFavorites(req, res, next) {
  var user = +req.params.user;
  if (data.favorites(user)) {
    res.status(200).send(data.favorites(user));
  } else {
    res.status(200).send([]);
  }
}

function addFavorite(req, res, next) {
  var user = req.body.user;
  var favorite = req.body.item.favorite;
  res.status(200).send({favorite: data.addFavorite(user, favorite)});
}

function removeFavorite(req, res, next) {
  var user = req.body.user;
  var favorite = req.body.favorite;
  res.status(200).send(data.removeFavorite(user, favorite));
}

function getWishes(req, res, next) {
  var user = +req.params.id;
  if (data.wishes(user)) {
    res.status(200).send(data.wishes(user));
  } else {
    res.status(200).send([]);
  }
}
function getWish(req, res, next) {
  var uid = +req.params.id;
  var wid = +req.params.wid;
  var wishes = data.wishes(uid);
  if (wishes) {
    var wish = _.find(wishes, function (o) {
      return o.id === wid;
    });
    if (wish) {
      res.status(200).send(wish);
    } else {
      res.status(200).send([]);
    }
  } else {
    res.status(200).send([]);
  }
}

function addWish(req, res, next) {
  var user = req.body.user;
  var wish = req.body.wish;
  res.status(200).send({wish: data.addWish(user, wish)});
}

function removeWish(req, res, next) {
  var user = req.body.user;
  var wish = req.body.wish;
  res.status(200).send(data.removeWish(user, wish));
}

function getUserPreferences(req, res, next) {
  var uid = +req.params.id;
  res.status(200).send(data.getUserPreferences(uid));
}

function setUserPreferences(req, res, next) {
  var uid = +req.params.id;
  var preferences = req.body.preferences;
  res.status(200).send(data.setUserPreferences(uid, preferences));
}
