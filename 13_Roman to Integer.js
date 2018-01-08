var romanToInt = function(s) {
    if(!s) return;
    var result=0;
    s = s.split('')
    var len = s.length; 
    var m = {};
    m['M']=1000;
    m['D']=500;
    m['C']=100;
    m['L']=50;
    m['X']=10;
    m['V']=5;
    m['I']=1;
    for(var i=0;i<len -1;i++) { 
        if(m[s[i]]<m[s[i+1]]){ 
            result-=m[s[i]];  
        } else {
            result+=m[s[i]]; 
        }  
    }
    result+=m[s[i]]
    return result;
};