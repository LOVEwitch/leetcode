var twoSum = function(nums, target) {
    if(nums.length <=1)
        return;
    var hash = {}
    for(let i=0;i<nums.length;i++) {
        j = target - nums[i];
        if(hash[j] == undefined) {               
            hash[nums[i]] = i;
        } else {
            return [hash[j],i];
        }
    }
};