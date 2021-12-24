import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('useFecthGifs tests', () => {
    test('it should return initial state', async() => {
        //const {data, loading} = useFetchGifs('Goku');
        const {result:{current:{data,loading}}, waitForNextUpdate} = renderHook(()=> useFetchGifs('Goku'))
        await waitForNextUpdate({timeout:2500});
        //const {data, loading} = result.current; 
        //console.log(data, loading);
        expect(data.length).toBe(0);
        expect(loading).toBeTruthy(); 
    })

    test('it should return a imgs array and loading in false', async()=>{
        
        const {result , waitForNextUpdate} = renderHook(()=> useFetchGifs('Goku'))
        await waitForNextUpdate({timeout:2500});

        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    })
})