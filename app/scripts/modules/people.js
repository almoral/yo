define(['jquery'], function($) {
	var sayHello = function(){
		return 'Hi';
	};
	//List of properties for object that's being returned.
	return {
		//key-value pairs
		sayHello: sayHello 
  };
});