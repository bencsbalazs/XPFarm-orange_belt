const overTheRoad = (address, n)=>{
  if (!address || typeof(n) != "number"){
   return false;
  }
  return (n*2+1)-address;
};

module.exports = { overTheRoad };
