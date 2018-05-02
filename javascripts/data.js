const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');

const whenFishesLoad = (data) => {
  console.log('Fishes',data.fishes);
  $('#available').append(writeFishes(data.fishes));
};

const whenFishesDontLoad = (error) => {
  console.error('error');
};

const initializer = () => {
  loadFishes(whenFishesLoad,whenFishesDontLoad);
};

module.exports = initializer;
