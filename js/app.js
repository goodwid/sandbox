function compareGen (num) {
  return {
    lt: function (check) {
    return check < num;
    },
    gt: function (check) {
      return check > num;
    },
    lteq: function (check) {
      return check <= num;
    },
    gteq: function (check) {
      return check >= num;
    },
    eq: function (check) {
      return check === num;
    }
  };
}

arr = [0,1,2,3,4,5,6,7,8,9,10];

console.log(arr.filter(compareGen(4).lt));
console.log(arr.filter(compareGen(5).gt));
console.log(arr.filter(compareGen(7).gteq));
console.log(arr.filter(compareGen(2).eq));
