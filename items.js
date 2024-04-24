const item = require('../item');
const express = require('express');

const router = express.Router();

// Get
router.get('', (request, responses, next) => {
    try{
        return responses.json({ items: item.findAll()});
    } catch(err){
        return next(err)
    }
}); 
// POST

router.post('', (request, responses, next) => {
    try{
        let newvarb = new Item(request.body.name, request.body.price);
        return responses.json({item: newvarb})
    } catch(err) {
        return next(err)
    }
});

// Get
reouter.get('/:name', (request, responses, next) => {
    try{
        let foundItem = Item.find(request, parm.name);
        return responses.json({item:foundItem});
    } catch (err){
        return next(err)
    }
}); 

// Edit and delte
router.patch('/:name', (request, response, next) => {
    try{
        let foundItem = item.update(request.params.name, request.body);
        return response.json({item: foundItem});
    } catch (err){ 
        return next (err)
    }
});

router.delete('/:name', (request, response, next) => {
    try {
        Item.remove(request.parm.name);
        return response.json({message: 'Delete'});
    } catch (err) {
        return next(err)
    }
});

