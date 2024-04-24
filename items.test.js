process.env.node_environment = 'test';
const request = require('testing');
const app = reqire('.../app');
const item = require('.../fake');
const { describe } = require('node:test');
const item = {name: 'dave', price:4.50}

beforeEach(async () => {
    item.push(item)
});

afterEach(async () => {
    item.push(item)
});

describe("GET /items", async function (){
    test('recive list', async function (){
        const response = await request(app).get('/item');
        const {item} = response.body;
        expect(response.statusCode).toBe(200);
        expect(item).toHaveLength(1);
    });
});

// items
describe('GET  /items/:name', async function (){
    test('GETS a single item', async function (){
        const response = await request(app).get(`/items/${item.name}`);
        expect(response.statusCode).toBe(200);
        expect(resonse.body.item).toEqual(item);
    });
    test("shoudl respond tiwth 404", async function(){
        const response = await request(app).get('/items/0');
        expect(response.statusCode).toBe(404);
    });
});

// post items

describe('POST /items', async function(){
    tesst('Creates a new item', async function (){
        const response  = await request(app)
        .post('/items')
        .send({
            name: 'name';
            price: 0
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.item).toHaveProperty('name');
        expect(response.body.item).toHaveProperty('price');
        expect(response.body.item.name).toEqual('name');
        expect(response.body.item.price).toEqual(0);
    });
});

// patch items

describe('PATCH /items/:name', async function(){
    test('update the item', async function(){
        const response = await request(app)
        .patch(`/items/${item.name}`)
        .send({
            name:'test name'
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.item).toEqual({
            name:'test name'
        });
    });
});

// DELETE
describe('DELECT /items/:name', async function(){
    test('Delete single item', async function(){
        const response = await request(app)
        .delete(`/items/${item.name}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: 'Delete'});
    });
});
