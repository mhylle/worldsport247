var _ = require('underscore');

function getTrousers() {
  return [
    {
      id: 1,
      brand: 'Adidas',
      name: 'Performance',
      size: ['S', 'M', 'L', 'XL'],
      color: ['Blå', 'Sort'],
      price: 239.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/ad_trouser01.png', 'jesper/ad_trouser02.jpg'],
      description: 'Et par fantastiske bukser der kan bruges til både hverdagsbrug og til det lidt mere festlige.',
      onsale: 'true'
    },
    {
      id: 2,
      brand: 'Adidas',
      name: 'Performance',
      size: ['S', 'M', 'L', 'XL'],
      color: ['Blå', 'Sort'],
      price: 239.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/ad_trouser06.jpg'],
      description: 'Et par fantastiske bukser der kan bruges til både hverdagsbrug og til det lidt mere festlige.',
      onsale: 'true'
    },
    {
      id: 3,
      brand: 'Hummel',
      name: 'Tiro 15 Training Pant',
      size: ['S', 'M', 'L', 'XL'],
      color: ['Sort', 'Grå', 'Lysgrå'],
      price: 209.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/hm_trouser03.jpg', 'jesper/hm_trouser05.jpg'],
      description: 'Når der virkeligt skal trænes igennem, så kan du bare ikke gå forbi den her model..'
    },
    {
      id: 4,
      brand: 'Hummel',
      name: 'Tiro 15 Training Pant',
      size: ['S', 'M', 'L', 'XL'],
      color: ['Sort', 'Grå', 'Lysgrå'],
      price: 209.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/hm_trouser04.jpg'],
      description: 'Når der virkeligt skal trænes igennem, så kan du bare ikke gå forbi den her model..'
    },
    {
      id: 5,
      brand: 'Nike',
      name: 'Condivo 14',
      size: ['S', 'M', 'L', 'XL'],
      color: ['Blå'],
      price: 249.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/nk_trouser07.jpg']
    },
    {
      id: 7,
      brand: 'Nike',
      name: 'Condivo 14',
      size: ['S', 'M', 'L', 'XL'],
      color: ['Blå'],
      price: 249.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/nk_trouser08.jpg'],
      onsale: 'true'
    },
    {
      id: 8,
      brand: 'Puma',
      name: 'Condivo 15',
      size: ['M', 'L', 'XL'],
      color: ['Sort'],
      price: 249.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/pm_trouser09.jpg']
    },
    {
      id: 9,
      brand: 'Puma',
      name: 'Condivo 15',
      size: ['M', 'L', 'XL'],
      color: ['Sort'],
      price: 249.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/pm_trouser10.jpg', 'jesper/pm_trouser11.jpg']
    },
    {
      id: 10,
      brand: 'Puma',
      name: 'Condivo 15',
      size: ['M', 'L', 'XL'],
      color: ['Sort'],
      price: 249.00,
      type: 'pants',
      gender: 'Herre',
      img: ['jesper/pm_trouser09.jpg', 'jesper/pm_trouser11.jpg']
    },
    {
      id: 11,
      brand: 'Adidas',
      name: 'Women\'s Core Training Pants',
      description: 'At adidas, everything we do is bound by one simple thought: we strive to help you perform ' +
      'at your best your success is our ambition your defeat spurs us on to be better.',
      price: 123.88,
      size: ['M', 'L', 'XL'],
      img: ['jesper/nk_trouser08.jpg'],
      color: ['Sort', 'Hvid'],
      keywords: [{name: '100% Other fibers'},
        {name: 'Imported'}, {name: 'Made for comfort'}, {name: 'Breathability'}, {name: 'Made for athletes'}],
      offer: true
    },
    {
      id: 12,
      brand: 'Nike',
      name: 'Tesla Men\'s Cool Dry Compression Baselayer Pants',
      description: 'Coolgear shirts & pants are designed for all seasons (not for Warmth).' +
      'Find your size on the chart below. ' +
      'We recommend selecting one size up. Flat-lock Seams Provides excellent comfort and protection. ' +
      'Early recovery After workouts, promotes faster recovery by controlling blood flow and prevents swelling. ',
      price: 123.88,
      size: ['S', 'M', 'L', 'XL'],
      img: ['jesper/nk_trouser07.jpg'],
      color: ['Sort', 'Hvid'],
      keywords: [{name: 'We strongly recommend ordering ONE size up what you normally wear.'},
        {name: 'Coolgear shirts&pants are designed for all seasons (not for Warmth)'},
        {name: '87% polyester-13% spandex. Excellent elasticity with enhanced range of motion.'}],
      offer: true
    }
  ];
}

function getFootballStatistics() {
  return [
    {
      id: 1,
      date: '2016-10-12T17:00:00.000Z',
      home: 'Fortuna Hjørring',
      homeCountry: 'dk',
      homeScore: 3,
      away: 'Athletic Club Bilbao',
      awayCountry: 'sp',
      awayScore: 1,
      arena: 'Bredbånd Nord Arena',
      league: 'Womens Champions League',
      gender: 'F',
      type: 'football'
    },
    {
      id: 2,
      date: '2016-10-12T02:10:00.000Z',
      home: 'Skive',
      homeCountry: 'dk',
      homeScore: 1,
      away: 'Silkeborg',
      awayCountry: 'dk',
      awayScore: 3,
      arena: 'Skive Arena',
      league: 'DBU Pokalen',
      gender: 'M',
      type: 'football'
    },
    {
      id: 3,
      date: '2016-10-12T01:30:00.000Z',
      home: 'USA',
      homeCountry: 'us',
      homeScore: 1,
      away: 'New Zealand',
      awayCountry: 'nz',
      awayScore: 1,
      arena: 'US Home',
      league: 'Friendly match',
      gender: 'M',
      type: 'football'
    }
  ];
}
function getHandballStatistics() {
  return [
    {
      id: 1,
      date: '2016-13-12T20:30:00.000Z',
      home: 'Skjern',
      homeCountry: 'dk',
      homeScore: 31,
      away: 'Sønderjyske',
      awayCountry: 'dk',
      awayScore: 26,
      arena: 'Skjern Arena',
      league: '888 Ligaen',
      gender: 'M',
      type: 'handball'
    },
    {
      id: 2,
      date: '2016-13-12T20:00:00.000Z',
      home: 'Sydhavsøerne',
      homeCountry: 'dk',
      homeScore: 19,
      away: 'Nordsjælland',
      awayCountry: 'dk',
      awayScore: 24,
      arena: 'NA',
      league: '1. division',
      gender: 'M',
      type: 'handball'
    },
    {
      id: 3,
      date: '2016-13-12T19:00:00.000Z',
      home: 'Bjerringbro K',
      homeCountry: 'dk',
      homeScore: 27,
      away: 'Vendsyssel K',
      awayCountry: 'dk',
      awayScore: 24,
      arena: 'NA',
      league: '1. division',
      gender: 'F',
      type: 'handball'
    }
  ];
}
function getTennisStatistics() {
  return [
    {
      id: 1,
      date: '2016-13-12T20:30:00.000Z',
      home: 'Skjern',
      homeCountry: 'dk',
      homeScore: 31,
      away: 'Sønderjyske',
      awayCountry: 'dk',
      awayScore: 26,
      arena: 'Skjern Arena',
      league: '888 Ligaen',
      gender: 'M',
      type: 'handball'
    },
    {
      id: 2,
      date: '2016-13-12T20:00:00.000Z',
      home: 'Sydhavsøerne',
      homeCountry: 'dk',
      homeScore: 19,
      away: 'Nordsjælland',
      awayCountry: 'dk',
      awayScore: 24,
      arena: 'NA',
      league: '1. division',
      gender: 'M',
      type: 'handball'
    },
    {
      id: 3,
      date: '2016-13-12T19:00:00.000Z',
      home: 'Bjerringbro K',
      homeCountry: 'dk',
      homeScore: 27,
      away: 'Vendsyssel K',
      awayCountry: 'dk',
      awayScore: 24,
      arena: 'NA',
      league: '1. division',
      gender: 'F',
      type: 'handball'
    }
  ];
}

function getUsers() {
  return [
    {
      id: 1,
      firstName: 'Martin',
      lastName: 'Hylleberg',
      username: 'mnh',
      password: 'mnh',
      interests: ['Handball', 'Tennis']
    },
    {
      id: 2,
      firstName: 'Sune',
      lastName: 'Håkonsson',
      username: 'sxh',
      password: 'sxh',
      interests: ['Football', 'Tennis']
    },
    {
      id: 3,
      firstName: 'Jesper',
      lastName: 'Madsen',
      username: 'jma',
      password: 'jma',
      interests: ['Football', 'Handball']
    }
  ];
}
function getNews() {
  return [
    {
      id: 1,
      name: 'AGF plot cource for Champions League finals.',
      description: 'AGF wins by 6-2 in recordbreaking match against Esbjerg, bringing them that one step ' +
      'closer to the coveted 6th place in the league.',
      type: 'football'
    },
    {
      id: 2,
      name: 'AGF wins by 6-2 in record breaking match.',
      description: 'AGF wins by 6-2 in record breaking match against Esbjerg, bringing them that one step ' +
      'closer to the coveted 6th place in the league.',
      type: 'football'
    },
    {
      id: 3,
      name: 'SK Aarhus drops game after being in front all game.',
      description: 'SK Aarhus has the game in hand all game until 20 seconds before end.',
      type: 'handball'
    },
    {
      id: 4,
      name: 'Champions League to fund all star team AGF',
      description: 'AGF wins by 6-2 in recordbreaking match against Esbjerg, bringing them that one step ' +
      'closer to the coveted 6th place in the league.',
      type: 'football'
    }
  ];
}

function getLimitedOffer() {
  return {
    id: 1,
    name: 'Tesla Men\'s Cool Dry Compression Baselayer Pants Legging Shorts Tights',
    description: 'Coolgear shirts & pants are designed for all seasons (not for Warmth).' +
    'Find your size on the chart below. ' +
    'We recommend selecting one size up. Flat-lock Seams Provides excellent comfort and protection. ' +
    'Early recovery After workouts, promotes faster recovery by controlling blood flow and prevents swelling. ',
    price: 123.88,
    image: 'jesper/ad_trouser01.png',
    color: ['black', 'white'],
    keywords: [{name: 'We strongly recommend ordering ONE size up what you normally wear.'},
      {name: 'Coolgear shirts&pants are designed for all seasons (not for Warmth)'},
      {name: '87% polyester-13% spandex. Excellent elasticity with enhanced range of motion.'}],
    expires: '3'
  };
}
function getOffer() {
  var onOffer =_.filter(getTrousers(), function(t) {
    return t.offer === true;
  });
  return onOffer;
}

function getSports() {
  return [
    {id: 1, name: 'football'},
    {id: 2, name: 'handball'},
    {id: 3, name: 'tennis'},
    {id: 4, name: 'basketball'},
    {id: 5, name: 'squash'}
  ];
}

function getTeams() {
  return [
    {id: 1, name: 'AGF', venue: 'Ceres Park'},
    {id: 2, name: 'FCK', venue: 'Parken'},
    {id: 3, name: 'AAB', venue: 'Nordjyske Arena'}
  ];
}


var favoriteData = new Map();
function getFavorites(user) {
  return favoriteData.get(user);
}

function addFavorite(user, favorite) {
  if (favoriteData.has(user)) {
    var favorites = favoriteData.get(user);
    favorites.push(favorite);
    favoriteData.set(user, favorites);
  } else {
    favoriteData.set(user, [favorite]);
  }

  return favorite;
}

function removeFavorite(user, favorite) {
  if (favoriteData.has(user)) {
    var favorites = favoriteData.get(user);
    favorites = _.filter(favorites, function (o) {
      if (favorite) {
        return o.id === favorite.id;
      }
      return false;
    });
    favoriteData.set(user, favorites);
  }
}

var wishData = new Map();
function getWishes(user) {
  return wishData.get(user);
}

function getWish(uid, wid) {
  var wishes = wishData.get(uid);
  var wish = _.find(wishes, function (w) {
    return wid === w.id;
  });
  return wish;
}

function addWish(user, wish) {
  if (wishData.has(user)) {
    var wishes = wishData.get(user);
    wishes.push(wish);
    wishData.set(user, wishes);
  } else {
    wishData.set(user, [wish]);
  }

  return wish;
}

function removeWish(user, wish) {
  if (wishData.has(user)) {
    var wishes = wishData.get(user);
    wishes = _.filter(wishes, function (o) {
      if (wish) {
        return o.id === wish.id;
      }
      return false;
    });
    wishData.set(user, wishes);
  }
}

var userPreferences = new Map();

function setUserPreferences(uid, userPrefs) {
  userPreferences.set(uid, userPrefs);
}

function getUserPreferences(id) {
  return userPreferences.get(id);
}
module.exports = {
  favoriteData: favoriteData,
  wishData: wishData,
  userPreferences: userPreferences,
  trousers: getTrousers(),
  footBallStatistics: getFootballStatistics(),
  handballStatistics: getHandballStatistics(),
  tennisStatistics: getTennisStatistics(),
  users: getUsers(),
  getUserPreferences: getUserPreferences,
  setUserPreferences: setUserPreferences,
  news: getNews(),
  limitedOffer: getLimitedOffer(),
  offer: getOffer(),
  sports: getSports(),
  teams: getTeams(),
  favorites: getFavorites,
  addFavorite: addFavorite,
  removeFavorite: removeFavorite,
  wishes: getWishes,
  getWish: getWish,
  addWish: addWish,
  removeWish: removeWish
};
