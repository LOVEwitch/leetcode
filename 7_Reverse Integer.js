var reverse = function(x) {
    var arr = [],num,MAX,MIN;
    MAX = Math.pow(2,31) - 1;
    MIN = -Math.pow(2,31)
    if (!Number(x) ) {
        if(x === 0) {
            return 0;
        }
        return;
    } else if ((x>MAX)||(x<MIN)) {
        return;
    }
    
    if (x<0) {
        arr = x.toString().split("")
        arr.shift()
        arr.reverse().splice(0,0,"-")
    } else if(x>0){
        arr = x.toString().split("").reverse()
    } 
    num = parseInt(arr.join(""))
    if ((num>MAX)||(num<MIN)) {
        return 0;
    } else {
        return num;
    }
    
};