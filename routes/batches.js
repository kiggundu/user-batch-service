var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');

/* Post batches. */
router.post('/', function(req, res1, next) {
    try{
        // console.log(req.body);
        // console.log("req.body========================");
        const baseUrl = req.body.endpoint.url;
        const userBatchUpdates = req.body.payload;
        var resultsIn = 0;
        const results = [];

        responses = userBatchUpdates.map((user) => {
            return (async () => {
                console.log("----->", user.body)
                var options = {
                    method: req.body.endpoint.verb,
                    uri: baseUrl + "/" + user.path,
                    body: user.body,
                    json: true // Automatically stringifies the body to JSON
                };
                try{
                    res = await rp(options);
                    console.log('====res', res)
                    return res;
                }
                catch(err){
                    console.log('====err', err)
                    return err.statusCode;
                }
            })().then((result) => {
                console.log("-=-=-result=-=", result)
                results.push(result);
                if(results.length >= userBatchUpdates.length){
                    console.log("sending results")
                    res1.send(results);

                }
            })
            ;
        
        });

    }
    catch(error){
        console.log(error);
    }


});

module.exports = router;
