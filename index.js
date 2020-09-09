const { editDistance } = require('./lib/editDistance');

const compareNames = (name1, name2, maxEditDistance) => {
  if (!maxEditDistance) {
    maxEditDistance = 0;
  }
  name1 = name1
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('\u0110', 'D')
    .toLowerCase();
  name2 = name2
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('\u0110', 'D')
    .toLowerCase();
  return editDistance(name1, name2, maxEditDistance);
};

const compareAddresses = (address1, address2, maxEditDistance) => {
  if (!maxEditDistance) {
    maxEditDistance = 0;
  }
  address1 = address1
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('\u0110', 'D')
    .replace(/[\s,]+/g, ' ')
    .trim()
    .toLowerCase();
  address2 = address2
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace('\u0110', 'D')
    .replace(/[\s,]+/g, ' ')
    .trim()
    .toLowerCase();

  return editDistance(address1, address2, maxEditDistance);
};

module.exports = { compareNames, compareAddresses };
