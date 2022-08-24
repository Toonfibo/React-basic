import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';        
import'./MyCard.css';                      
import Navbar from './Navbar';
import MyCard from './MyCard';


function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch("https://www.mecallapi.com/api/attractions")
    .then(res => res.json())
    .then((result) => {setData(result)})
  },[])
  return (
    <>
     <Navbar />
     <h1 style={{paddingLeft: '10px'}}> Attractions</h1>
     <div className='grid-container'>
      {data.map(item => (
         <MyCard key={item.id} name={item.name} coverimage={item.coverimage} detail={item.detail} />
      ))}
       
        
    </div>
    </>
    
    
  );
}

export default App;
