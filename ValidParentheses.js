/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length%2 != 0) return false
    const closedBrackets = [')', ']', '}']
    if (closedBrackets.includes(s[0])) return false
    if (!closedBrackets.includes(s[s.length-1])) return false
    let openQueue = []
    const bracketsMap = { '(' : ')', '[': ']', '{': '}' }
    for (i = 0; i < s.length; i++) {
        if (closedBrackets.includes(s[i])) {
            if (openQueue.length > 0 && bracketsMap[openQueue[openQueue.length-1]] === s[i]) {
                openQueue.pop()
            } else {
                return false
            }
        } else {
            openQueue.push(s[i])
        }
    }
    
    if (openQueue.length === 0) return true
    return false
};

console.log(isValid("()"))