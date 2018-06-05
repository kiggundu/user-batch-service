var express = require('express');
var router = express.Router();
var request = require('request');

/* Post batches. */
router.post('/', function(req, res, next) {
    try{
        // console.log(req.body);
        // console.log("req.body========================");
        const baseUrl = req.body.endpoint.url;
        const userBatchUpdates = req.body.payload;
        
        userBatchUpdates.map((user) => {
            request.post(
                baseUrl + "/" + user.path,
                user.body,
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body)
                    }
                    console.log(response.statusCode)
                }
            );
        });

    }
    catch(error){
        console.log(error);
    }


  res.send('Batch endpoint is live');
});

module.exports = router;
