cats = [
  ['Alice','images/cat1.jpg'],
  ['Bob','images/cat2.jpg'],
  ['Carol','images/cat3.jpg'],
  ['Dave','images/cat4.jpg'],
  ['Edna','images/cat5.jpg']
];
var path = 'images/';
var $cat = $('#cat');
var $info = $('#info');
var current = 0;

$('#prev').on('click', function() {
  changeImage(-1);
});
$('#next').on('click', function() {
  changeImage(1);
});
$cat.attr('src',cats[current][1]);
$info.val(cats[current][0]);

function changeImage(num) {
  current += num;
  if (current > cats.length -1) {
    current = 0;
  };
  if (current <= -1) {
    current = cats.length -1;
  }
  $cat.attr('src',cats[current][1]);
  $info.val(cats[current][0]);
}
