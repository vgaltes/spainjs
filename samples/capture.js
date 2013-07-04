var casper = require('casper').create({
	viewport:{
		width: 800,
		height: 600
	}
});

casper.start('http://spainjs.org', function(){
    this.echo('We are at ' + this.getTitle() 
    	+ '(' + this.getCurrentUrl() + ')');
});

casper.then(function(){
	this.capture('spainjs.png');
});

casper.run(function(){
	this.echo('finished');
	this.exit();
});