const items = require('./fake') 

class existingItem{
    constructor(name, price){
        this.name = name;
        this.price = price;
        items.push(this);
    }
    static findAll(){
        return items
    }
    static update(name, data){
        let founditem = items.find(name);
        if(founditem === undefined){
            throw {message: 'Not Found', status: 404}
        }
        founditem.name = data.name;
        founditem.price = data.price;
        return founditem;
    }
    static find(name){
        const foundItem = items.find(value => value.name === name);
        if(foundItem === undefined){
            throw {message: 'Note Found', Status: 404}
        } 
        return foundItem
    }

    static remove(name){
        let foundIdx = items.findIndex(value => value.name === name);
        if(foundIdx === undefined){
            throw {message: 'Not Found', status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports = existingItem;