var express = require('express');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser,json());
router.use(bodyParser.urlencoded({extended : false}));


router.post('/', (req, res, next) => {
  //do an SQl query to post a review
  connect.query('INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP()', (error, rows) => {
    if (error){
      throw error;
    } else {
      res.json(rows);
      });
    }
  })
});

module.exports = router;
