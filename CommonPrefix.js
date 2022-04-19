/**
 * @param {string[]} strs
 * @return {string}
 */

 const longestCommonPrefix = (strs) => {
    if (strs[0] === "") {
        return ""
    }
    let prefix = ""
    while (prefix.length < strs[0].length) {
        const symbol = strs[0][prefix.length]
        for (j = 1; j < strs.length; j++) {
            if (prefix.length > strs[j].length) {
                return prefix
            }
            if (symbol != strs[j][prefix.length]) {
                return prefix
            }
        }
        prefix += symbol
    }
    return prefix
};



console.log(longestCommonPrefix(["flower","flow","flight"]))