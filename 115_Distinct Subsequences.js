/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var M = s.length+1,N = t.length+1;
    var dp = new Array(N);
    console.log(dp)
    for (var i = 0; i < N; i++) {
        dp[i] = new Array(M);
        dp[i][0] = 0;
    }
    console.log(dp)
    for (var i = 0; i < M; i++) {
        dp[0][i] = 1;
    }
    console.log(dp)
    for(let i = 0; i < t.length; i++) {
        for (var j = 0; j < s.length; j++) {
            if (s[j] == t[i]) {
                dp[i+1][j+1] = dp[i][j] + dp[i+1][j];
            } else {
                dp[i+1][j+1] = dp[i+1][j];
            }
        }
    }
    return dp[t.length][s.length]
};