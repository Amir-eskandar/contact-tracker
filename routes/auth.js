const express = require('express');
const router = express.Router();

//@route GET /api/auth
//@Desc Get logged in user
//@access private
router.get('/', (req, res) => res.send('Get logged in user'));


//@route POST /api/auth
//@Desc Auth user & get token
//@access public
router.post('/', (req, res) => res.send('Log in user'));

module.exports = router;