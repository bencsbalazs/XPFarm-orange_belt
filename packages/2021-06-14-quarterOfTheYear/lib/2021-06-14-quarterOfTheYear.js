const quarterOfTheYear = (param) => {
  if (typeof param != "number" || param > 12 || param < 1) {
    return false;
  }
  switch (true) {
    case param < 4:
      return 1;
    case param < 7:
      return 2;
    case param < 10:
      return 3;
    case param < 13:
      return 4;
  }
};

module.exports = { quarterOfTheYear };
