var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');

/* Post batches. */
router.post('/', function(req, res, next) {
    try{
        // console.log(req.body);
        // console.log("req.body========================");
        const baseUrl = req.body.endpoint.url;
        const userBatchUpdates = req.body.payload;

        responses = userBatchUpdates.map((user) => {
        
            var options = {
                method: 'PUT',
                uri: baseUrl + "/" + user.path,
                body: user.body,
                json: true // Automatically stringifies the body to JSON
            };
            return rp(options).then((res) => res.statusCode);
        });

        console.log("responses=====");
        console.log(responses);
        console.log("responses=====");
        
        Promise.all(responses)
        .then((result) => {
            console.log("all responses=====", result);
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
            
        })
    }
    catch(error){
        console.log(error);
    }


});

module.exports = router;
