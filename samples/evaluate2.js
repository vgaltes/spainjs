var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.start('http://casperjs.azurewebsites.net/');

casper.then(function()
{
	this.evaluate(function()
	{
		$("body").css("background-color", "red");
		return;
	});
});

casper.then(function(){
	this.capture('redBody.png');
});

casper.run(function(){
	this.echo(this.getTitle());
	this.echo('finished');
	this.exit();
});