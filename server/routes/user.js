const express = require('express');
const router = express.Router();

const { setuser, getuser, updateuser } = require('../controllers/user');


router.post('/setuser',setuser);
router.get('/getuser',getuser);
router.put('/updateuser',updateuser);


module.exports = router;