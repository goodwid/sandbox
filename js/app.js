var WUdata;
var wu = {};
wu.apiKey = '5e1af6276eda1937/';
wu.format = '/q/';
wu.base = 'http://api.wunderground.com/api/';
wu.url = function (feature, settings, locale) {
  return this.base + this.apiKey + feature + '/' + settings + this.format + locale + '.json';
}

var settings = 'pws:1';
var feature = 'forecast';
var locale = '97203';


$.getJSON(wu.url(feature,settings,locale), function(data) {
  WUdata = data;
  console.log(WUdata);
  day0highF = WUdata.forecast.simpleforecast.forecastday[0].high.fahrenheit;

});
