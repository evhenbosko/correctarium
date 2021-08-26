
import App from './App'


test('price test',()=>
{ const price=jest.fn()
 
expect(price(1*2*3)).toBe(6)
expect(1*1*1).toBe(1)
expect(1*0*1).toBe(0)
})


test('deadline test',()=>{
    expect(2<3).toBe(true)
})