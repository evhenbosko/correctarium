import logo from './logo.svg';
import './App.css';
 import react,{useState} from 'react'

 
function App() {
  
const [language,setLanguage]=useState(0.05)
const [time,setTime]=useState('')
const [count,setCount]=useState(0)
const[type,setType]=useState(1)
const [totalPrice,setTotalPrice]=useState(0)

const price=(language,type,count)=>{
    if ((count<=1000)||(count<0)){count=1000}
      setTotalPrice(language*type*count)
let lang
    if (language===0.05){lang=1333}
    else lang=333
    dedline(lang,type,count)
return totalPrice

}

const dedline=(lang,type,count)=>{
  let result

  //время на выполнение (без учета не рабочих часов)
  result=(count/lang)*type*60*60*1000+1800000
  // если меньше часа , делаем час
  if (result<=3600000){result=3600000}
  // текущая дата
   let sec=Date.now()
   let dat=String(new Date(sec)).split(' ')
   // цыкл перебора времени  (ЕСЛИ МИНУТА "НЕ РАБОЧАЯ" ДОБАВЛЯЕМ ЕЕ К ВРЕМЕНИ ВЫПОЛНЕНИЯ ПОКА СЧЕТЧИК НЕ СТАНЕТ РАВЕН ВРЕМЕНИ ВЫПОЛНЕНИЯ)
 for(let i=0;i<=result;i+=60000){
 if ((dat[0]==="Sat")||(dat[0]==="Sun")||(Number(dat[4].split(':')[0])<=9)||(Number(dat[4].split(':')[0]))>=19){
  result+=60000
  console.log(dat)
}
// Cледующая минута
 dat=dat=String(new Date(sec+i)).split(' ')
}
  let deadline=String(new Date(sec+result)).split(' ')
  // заносим результат в стейт в удобном
 setTime(deadline[2]+' '+deadline[1]+' '+deadline[3]+' : '+deadline[0]+' : '+deadline[4] )

 return deadline

}




  

  return (
    <div className='App'>
    <label >Послуга</label>
     <select className='select' >  
        <option value="0.05" >Переклад </option>
        <option value="0.05">Редагування</option>
        <label> </label> 
    </select><p/>
      <label> мова </label> 
     <select className='select'   onChange={(e)=>setLanguage(Number(e.target.value))}>
        <option value="0.05">Російська</option>
        <option value="0.05">Українська</option>
        <option value="0.12">English</option>
        
    </select><p/>
    <label> формат тексту </label> 
    <select onChange={ (e)=>setType(Number(e.target.value))} >
        <option value="1" >Pdf,Txt,Doc,Docx</option>
        <option value="1.2">інший</option>
       
    </select><p/>
    <label> кількість символів </label> 
    <input type='number' onChange={(e)=>setCount(Number(e.target.value))}/><p/>
    <button onClick={(e)=>{price(language,type,count)}}>Замовити</button>
    
    <h1>вартість замовлення <p/>
    {totalPrice.toFixed(2)} грн</h1>
    <h1>
      Буде виконано <p/>
      {time}
    </h1>
    </div>
  );
}

export default App;
