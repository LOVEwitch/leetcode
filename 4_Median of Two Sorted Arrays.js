var findMedianSortedArrays = function(nums1, nums2) {
    var num = nums1.concat(nums2)
    nums = num.sort(function (a,b) {
        return a>b? 1:-1;
    }) 
    if(nums.length%2 == 0) {
        return (nums[nums.length/2-1]+nums[nums.length/2])/2;    
    } else {
        return nums[Math.floor(nums.length/2)]
    }
};