const findTheSquares = (n)=>{
  if (n % 2 == 0 || n>1000000 || n<0) {
    return false;
  }
  const i = (n - 1) / 2;
  return ((i + 1) ** 2)+ '-' + (i ** 2);
};

module.exports = { findTheSquares };
