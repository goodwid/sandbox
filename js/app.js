arr = [1,2,3];



$('#category-filter').on('change', function() {
  // arr.forEach(function(a) {
  //   console.log('not ', a);
  // });
  // console.log($('#category-filter').val());

  console.log(arr.filter(function(a) {
    return a == $('#category-filter').val();
  }));

  // arr.forEach(function(a) {
  //   console.log('yes', a);
  // });

});
