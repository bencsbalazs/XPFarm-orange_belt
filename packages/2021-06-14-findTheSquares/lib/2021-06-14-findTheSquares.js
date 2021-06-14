const findTheSquares = (n)=>{
  if (n % 2 != 0 || n>1000000 || n<0) {
    return false;
  }
};

module.exports = { findTheSquares };
