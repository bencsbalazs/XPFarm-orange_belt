const quarterOfTheYear = (param)=>{
  if (typeof(param) != "number" || param > 12 || param < 1) {
    return false;
  }
};

module.exports = { quarterOfTheYear };
