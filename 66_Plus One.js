/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits.length == 0) {return}
    for (var i = digits.length - 1; i >= 0; i--) {
            if ((digits[i]) < 9) {
                digits[i] ++;
                return digits
            } else if (digits[i] == 9) {
                digits[i] = 0
            }
     console.log(i)       
    }
    if ( i== -1) {
        digits.splice(0,0,1)
        return digits;
    }    
};