define([], function() {
	
	var apples = [];

	var sayHello = function(){
		return 'Hi there';
	};

	var sayGoodbye = function(name){
		return 'Goodbye, ' + name;
	};

	var addApple = function(typeOfApple){
		if(apples.push(typeOfApple))
				return true;

		return false;
	}

	var countApples = function(numberOfApples){
		return apples.length;
	}

	//List of properties for object that's being returned.
	return {
		//key-value pairs
		sayHello: sayHello,
		sayGoodbye: sayGoodbye,
		addApple: addApple,
		countApples: countApples
  };
});