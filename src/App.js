import logo from './logo.svg';
import './App.css';
 import react,{useState} from 'react'
 
function App() {
  const [language,setLanguage]=useState(0.05)
const price=(language,mimetype,count)=>{

  let result=count
  return result
}
const deadLine=(language,mimetype,count,currentdate)=>{}
  return (
    <div className="App">
     <select name="language" class="filter-todo">
        <option value="Російська">Російська</option>
        <option value="Українська">Українська</option>
        <option value="English">English</option>

    </select>
    <select name="language" class="filter-todo" o>
        <option value="Російська" nChange={(e)=>{setLanguage(0.05)}}>Pdf,Txt,Doc,Docx</option>
        <option value="Українська" onSelect={(e)=>{setLanguage(0.12)}}>інший</option>
        
    </select>
    <button onClick={console.log(language)}></button>
    </div>
  );
}

export default App;
