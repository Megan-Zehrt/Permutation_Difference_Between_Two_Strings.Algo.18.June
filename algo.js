// 3146. Permutation Difference Between Two Strings


// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

// The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

// Return the permutation difference between s and t.






/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    
    let difference = 0
    let dictionary = new Map()

    for(let i = 0; i < s.length; i++){
        dictionary.set(s[i], i)
    }

    for(let j = 0; j < t.length; j++){
        let char = t[j]
        let Index = dictionary.get(char)
        difference += Math.abs(Index - j)
    }

    return difference
};