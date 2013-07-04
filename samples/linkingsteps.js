var casper = require('casper').create();

casper.start('http://wwww.bing.com', function(){
    this.echo('We are at ' + this.getTitle() 
    	+ '(' + this.getCurrentUrl() + ')');
});

casper.then(function(){
	this.open('http://spainjs.org');
});

casper.then(function(){
	this.echo('We are at ' + this.getTitle() 
    	+ '(' + this.getCurrentUrl() + ')');
});

casper.run(function(){
	this.echo('finished');
	this.exit();
});