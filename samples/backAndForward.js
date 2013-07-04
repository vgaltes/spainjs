var casper = require('casper').create();

casper.start('http://casperjs.azurewebsites.net', function(){
	this.waitForSelector('#countrySelect', function(){
        this.echo(this.getTitle());
    });
});


casper.then(function(){
	this.click('#details');
});

casper.then(function(){
	this.echo(this.getTitle());
	this.back();
});

casper.then(function(){
	this.echo(this.getTitle());
	this.forward();
});

casper.run(function(){
	this.echo(this.getTitle());
	this.echo('finished');
	this.exit();
});