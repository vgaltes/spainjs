var casper = require('casper').create();

casper.start('http://wwww.bing.com', function(){
    this.echo('We are at ' + this.getTitle() 
    	+ '(' + this.getCurrentUrl() + ')');
});

casper.thenOpen('http://spainjs.org', function(){
		this.echo('We are at ' + this.getTitle() 
    	+ '(' + this.getCurrentUrl() + ')');
});

casper.run(function(){
	this.echo('finished');
	this.exit();
});