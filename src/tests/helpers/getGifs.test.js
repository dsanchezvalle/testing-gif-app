import { getGifs } from '../../helpers/getGifs'

describe('getGifs tests', () =>{
    test('it should return 10 gifs', async ()=> {
        const result = await getGifs('Goku');
        expect(result.length).toBe(10);
    })

    test('it should return a void array when no args', async ()=> {
        const result = await getGifs('');
        expect(result.length).toBe(0);
    })
})