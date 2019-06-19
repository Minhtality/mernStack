const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Items');

//@route    GET api/item
//@desc    desc get all items
//@access   Public

router.get('/', (req, res) => {
    Item
        .find()
        .sort({date:-1})
        .then(items => res.json(items))
});

//@route    POST api/item
//@desc     Create an item
//@access   Private

router.post('/', (req, res) => {
const newItem = new Item({
    name: req.body.name
    });
    newItem
        .save()
        .then(item => res.json(item))
});

//@route    DELETE api/item
//@desc     DELETE an item
//@access   Private

router.delete('/:id', (req, res) => {
 Item.findById(req.params.id)
 .then(item => item.remove().then(()=> res.json({success:true})))
 .catch(err => res.status(404).json({success:false}));
});


//@route    put api/item
//@desc     Update an item + date
//@access   Private


module.exports = router;