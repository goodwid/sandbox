function lt_gen (num) {
  return (function (check) {
    return check < num;
    })
  };

function gt_gen (num) {
  return (function (check) {
    return check > num;
  });
}

arr = [0,1,2,3,4,5,6,7,8,9,10];

console.log(arr.filter(lt_gen(5)));
console.log(arr.filter(gt_gen(4)));
