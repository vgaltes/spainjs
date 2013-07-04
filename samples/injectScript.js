var casper = require('casper').create({
    clientScripts:  [
        'includes/customScript.js'
     ]
});

casper.start('http://casperjs.azurewebsites.net', function(){
	this.waitForSelector('#countrySelect', function(){
        this.echo(this.getTitle());
    });
});

casper.then(function(){
	this.echo( this.evaluate( function() {
		return getCurrentDate();
	}));
});


casper.run(function(){
	this.echo(this.getTitle());
	this.echo('finished');
	this.exit();
});