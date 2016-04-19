
things = [];

function Thing (opt) {
  this.name = opt.name;
  this.type = opt.type;
  this.age = opt.age;
}

$('input').on('click', snagData);

function snagData() {
  $.getJSON('js/item.json', function (data) {
    data.forEach(function (i){
      things.push(new Thing(i));
    });
  });
}
