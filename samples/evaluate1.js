var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.start('http://casperjs.azurewebsites.net/');

casper.then(function()
{
	this.echo(this.evaluate(function()
	{
		return document.title;
	}));
});

casper.run(function(){
	this.echo('finished');
	this.exit();
});