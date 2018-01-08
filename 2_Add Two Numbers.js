var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) { return;}
    var l3 = new ListNode(0);
    var p = l3;
    var extra = 0;
    while(l1 || l2 || extra) {
        var sum = (l1?l1.val:0) + (l2?l2.val:0) +extra;
        extra = parseInt(sum/10);
        p.next = new ListNode(sum%10);
        p = p.next;
        l1 = l1?l1.next:l1;
        l2 = l2?l2.next:l2;
    }
    return l3.next;
};