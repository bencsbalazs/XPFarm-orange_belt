const quarterOfTheYear = (param) => {
  if (typeof param != "number" || param > 12 || param < 1) {return false;}
  return Math.ceil(param/3);
};

module.exports = { quarterOfTheYear };
