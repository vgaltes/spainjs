//create casper object
var casper = require('casper').create();

//open url
casper.start('http://localhost:8099');

casper.then(function(){
    this.waitForSelector('#countrySelect', function(){
        this.test.assertTitle("Home | Application");
        this.capture('step1.png');
        this.test.assertVisible('#countrySelect');
    });
});

casper.then(function(){
    this.capture('step2.png');
    this.evaluate(function () {
        var $select = $('#countrySelect');
        var _option = '7';
        $select.val(_option);
        $select.change();
      });

    this.capture('step3.png');

    this.waitUntilVisible('#stateSelect', function(){
        this.test.assertVisible('#countrySelect');
    });

});

casper.then(function(){
    this.capture('step4.png');
    this.evaluate(function () {
        var $select = $('#stateSelect');
        var _option = '2';
        $select.val(_option);
        $select.change();
      });

    this.capture('step5.png');

    this.waitUntilVisible('#citySelect', function(){
        this.test.assertVisible('#citySelect');
    });

});

casper.then(function(){
    this.capture('step6.png');
    this.evaluate(function () {
        var $select = $('#citySelect');
        var _option = '12';
        $select.val(_option);
        $select.change();
      });

    this.capture('step7.png');
});

casper.waitUntilVisible('#message', function(){
    this.test.assertEval(function(){
        return $('#message').text() === "You have selected City 13 of State 3 from State 3 of Country 8 from Country 8";
    });
})

casper.run(function() {
    //finish execution script 
    this.echo('finished');
    this.test.done(5);
    this.test.renderResults(true,0,"testResults.xml");
});