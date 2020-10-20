var express = require('express');
var router = express.Router();
var { User,Message }  =  require('../model/index')
/* GET users listing. */
router.get('/:username',async (req, res, next)=> {
  var result = await User.findOne({
    where:{
        username:req.params.username
    },
    include: [
      {
        model: Message,
        attributes: ['id', 'content'],
      },
    ]
  })
  res.send(result);
});

module.exports = router;
