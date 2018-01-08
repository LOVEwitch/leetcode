var isPalindrome = function(x) {
    if(x<0 || (x!=0 && x%10 ==0 )) {
        return false;
    } 
    if(x<10) return true;
    var rev = 0; 
    while(x>rev){
        rev = rev*10 + x%10;
        x = parseInt(x/10)
    }
    return (x==rev || x==parseInt(rev/10));
};