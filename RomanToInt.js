/**
 * @param {string} s
 * @return {number}
 */
 let romanIntMap = new Map();
 romanIntMap.set('I', 1);
 romanIntMap.set('V', 5);
 romanIntMap.set('X', 10);
 romanIntMap.set('L', 50);
 romanIntMap.set('C', 100);
 romanIntMap.set('D', 500);
 romanIntMap.set('M', 1000);


const romanToInt = (s) => {

 if (s.length === 1) return findNumber(s); 
 
 let arabianNumber = 0;
 let i = 0;

 while (i < s.length) {
     arabianNumber += findNumber(s[i], s[i+1]);
     romanIntMap.get(s[i]) < romanIntMap.get(s[i+1]) ? i += 2 : i +=1;
 }
     
 return arabianNumber;
};

const findNumber = (symbol, nextSymbol) => {
 if (romanIntMap.get(symbol) < romanIntMap.get(nextSymbol)) {
     return romanIntMap.get(nextSymbol) - romanIntMap.get(symbol)
 }
 return romanIntMap.get(symbol)
}

const result = romanToInt('MCMXCIV');
console.log(result);
