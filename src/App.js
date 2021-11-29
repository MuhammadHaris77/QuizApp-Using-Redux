import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

import { useState } from 'react';
function App() {
  const [questionInd,setQuestionInd] = useState(0)
  const [result,setResult] = useState(false)
  const [marks,setMarks] = useState(false)
   const state = useSelector((e)=> e)
   console.log(state.data[0])

   const nextQuestion =()=>{
    if(state.data.length-1 == questionInd ){
      setResult(true)
    }
    else{
      setQuestionInd(questionInd + 1)
    }
   }

   const checkAnwser=(cor,user)=>{
    if(cor == user){
         setMarks(marks + 1)
    }
    nextQuestion();
 }  

  return (
    
    <div className="App">
               <h1>Quiz App</h1>
{
   result ? <h1>RESULT : {(marks/state.data.length * 100)} %</h1> 
   : <div>


          <p className="question">Q : {state.data[questionInd].question}</p>
       <div >
          {
            state.data[questionInd].option.map((e)=>{
              return <p  className="option" onClick={()=>checkAnwser(state.data[questionInd].anwser,e) }>{e}</p>

            })
          }
       </div>
      <br/>

      <button onClick={nextQuestion} className="nextbtn">Next</button>
    
      

   </div>
}
      
    
      
          </div>
       
  );
}

export default App;
