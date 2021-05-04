const assert = require('assert');
const Paint = require('../paint.js');
const Room = require('../room.js');
const Decorator = require('../decorator.js')


let room_1;

describe('Room', function () {
    
    beforeEach(function () {
        room_1 = new Room(50, false);
        room_2 = new Room(50, true);
    });

    it('should have an area in sqm', function () {
        const actual = room_1.area;
        assert.strictEqual(actual, 50);
    });
    it('should start not painted', function () {
        const actual = room_1.painted;
        assert.strictEqual(actual, room_1.painted);
    });
    it('should be painted', function () {
        const actual = room_2.painted;
        assert.strictEqual(actual, room_2.painted);
    });
    
    describe('paint', function () {

        beforeEach(function () {
            paint_1 = new Paint(5);
            paint_2 = new Paint(0)
        });

        it('should have a number of litres of paint', function () {
            const actual = paint_1.litres;
            assert.strictEqual(actual, 5)
        });
        it('can check it is empty', function () {
            const actual = paint_2.checkIfEmpty();
            assert.strictEqual(actual, true)
        });
        it('can check it is not empty', function () {
            const actual = paint_1.checkIfEmpty();
            assert.strictEqual(actual, false)
        });
        it('should be able to empty itself of paint', function () {
            paint_1.emptyCan();
            const actual = paint_1.checkIfEmpty()
            assert.strictEqual(actual, true)
        })
    });

    describe('decorator', function () {

        beforeEach(function () {
            decorator_1 = new Decorator(0)
        })
        it('should start with an empty paint stock', function () {
            const actual = decorator_1.stock;
            assert.deepStrictEqual(actual, [])
        })
        
    })

});