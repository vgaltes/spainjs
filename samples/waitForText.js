var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.start('http://casperjs.azurewebsites.net');

casper.waitForText("view", function(){
    this.echo(this.getTitle());
});

casper.run(function(){
	this.echo('finished');
	this.exit();
});