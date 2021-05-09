const express = require('express');
const router = express.Router();

//@route GET /api/contacts
//@Desc Get all user contacts
//@access Private
router.get('/', (req, res) => res.send('Get user contacts'));

//@route POST /api/contacts
//@Desc Add new conatct
//@access Private
router.post('/', (req, res) => res.send('Add new conatct'));

//@route PUT /api/contacts/:id
//@Desc Update user's contact
//@access Private
router.put('/:id', (req, res) => res.send('Update user conatct'));

//@route DELETE /api/contacts
//@Desc Delete user conatct
//@access Private
router.delete('/:id', (req, res) => res.send('Delete user conatct'));

 

module.exports = router;