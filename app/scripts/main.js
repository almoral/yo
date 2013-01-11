require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min'
  }
});
 
require(['jquery','modules/people'], function($,people) {
  // use app here
	$('.hero-unit').append(people.sayHello());
  
});
