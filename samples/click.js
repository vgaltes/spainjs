var casper = require('casper').create({
	viewportSize: {
		width: 1024,
		height: 768
	}
});

casper.start('http://casperjs.azurewebsites.net', function(){
	this.waitForSelector('#countrySelect', function(){
        this.echo("Let's go!");
        this.echo(this.getTitle());
    });
});

casper.then(function(){
	this.click('#details');
});

casper.run(function(){
	this.echo(this.getTitle());
	this.echo('finished');
	this.exit();
});