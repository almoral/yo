require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min',
    people: 'modules/people'
  }
});
 
require(['jquery','people'], function($,people) {
  // use app here
	$('.hero-unit').append(people.sayHello());
  
});
