export function lastSurvivor(str, coords) {
    if (typeof(str) != 'string'){
         return false;
     }
     if(typeof(coords) != 'object'){
         return false;
     }
     return coords.reduce( (str,coords) => str.slice(0,coords) + str.slice(coords+1) , str );
}