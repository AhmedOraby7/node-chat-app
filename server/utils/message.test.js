var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage' , () => {
    it('should generate the correct message object', () => {
        var from = 'Oraby';
        var text = 'Some Message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var latitude = '1';
        var longitude = '1';
        var location = generateLocationMessage(from, latitude, longitude);

        expect(location.createdAt).toBeA('number');
        expect(location.url).toEqual('https://www.google.com/maps?q=1,1');

    });
});