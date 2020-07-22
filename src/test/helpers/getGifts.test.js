const { getGifts } = require("../../helpers/getGifts");

describe('Pruebas con getGifts Fetch', () => {
    test('should traer 10 elementos', async () => {
        const gifs = await getGifts('One Punch');
        expect(gifs.length).toBe(10)
    })
    test('should traer 10 elementos', async () => {
        const gifs = await getGifts('');
        expect(gifs.length).toBe(0)
    })
    
});
