/**
 * @param {string[]} strs
 * @return {string}
 */

 const longestCommonPrefix = (strs) => {
    let prefix = ""
    while (prefix.length < strs[0].length) {
        for (j = 1; j < strs.length; j++) {
            if (prefix.length > strs[j].length) {
                return prefix
            }
            if (strs[0][prefix.length] != strs[j][prefix.length]) {
                return prefix
            }
        }
        prefix += strs[0][prefix.length]
    }
    return prefix
};



console.log(longestCommonPrefix([""]))