var formatted = new Formatter(document.getElementById('thing'), {
  persistent: false,
  patterns: [
    {'\\d{5}': '${{99}},{{999}}'},
    {'\\d{4}': '${{9}},{{999}}'},
    {'\\d{1,3}': '${{999}}'}
  ]
});
