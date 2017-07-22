const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Oraby',
            room: 'Node'
        },{
            id: '2',
            name: 'Ahmed',
            room: 'React'
        },{
            id: '3',
            name: 'Amira',
            room: 'Node'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Oraby',
            room: 'LOL'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        var userList = users.removeUser('1');
        expect(userList).toEqual(['Ahmed', 'Amira']);
    });

    it('should not remove user', () => {
        var userList = users.removeUser('4');
        expect(userList).toEqual(['Oraby', 'Ahmed', 'Amira']);
    });

    it('should find user', () => {
        var user = users.getUser('1');
        expect(user).toEqual(['Oraby']);
    });

    it('should not find user', () => {
        var user = users.getUser('4');
        expect(user).toEqual([]);
    });

    it('should return names of node room', () => {
        var userList = users.getUserList('Node');
        expect(userList).toEqual(['Oraby','Amira']);
    });

    it('should return names of react room', () => {
        var userList = users.getUserList('React');
        expect(userList).toEqual(['Ahmed']);
    })
});