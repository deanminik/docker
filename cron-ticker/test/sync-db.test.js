
const {syncDB} = require('../tasks/sync-db');

describe('Test in Sync-DB', () => {
    test('This should execute twice', () => {
        syncDB();
        const times = syncDB();
        console.log('Number of calls', times);

        expect(times).toBe(2);
    });
});