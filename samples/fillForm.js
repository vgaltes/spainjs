var casper = require('casper').create();

casper.start('http://casperjs.azurewebsites.net', function(){
	this.waitForSelector('#countrySelect', function(){
        this.echo(this.getTitle());
    });
});

casper.then(function(){
	this.waitUntilVisible('#countrySelect', function(){
        this.clickLabel('Info','a');
    });
});

casper.then(function() {
	this.waitUntilVisible('#info-form', function(){
	    this.fill('form#info-form', {
	        'FirstName': 'John',
	        'LastName': 'Smith'
	    });
	    this.evaluate(function(){
	    	$('input[type="submit"]').click();
	    	return;
	    });
	});
});

casper.then(function() {
	this.waitFor(function check() {
		return this.evaluate(function(){
    		return ($("#response").text().length > 0);
    	});
	}, function then()
	{
		this.echo('The text is' + this.fetchText('#response'));
    });
});

casper.run(function(){
	this.echo(this.getTitle());
	this.echo('finished');
	this.exit();
});