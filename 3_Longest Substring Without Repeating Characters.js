var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) {return 0;}
    var longest = 0, p1 = 0, p2 = 0, hashmap = {};
    while(p2 < s.length) {
        if (hashmap[s[p2]] != undefined) {
            p1 = Math.max(hashmap[s[p2]]+1,p1)
        }
        longest = Math.max(longest,p2-p1+1);
        hashmap[s[p2]] = p2;
        p2++;
    }
    return longest;
};