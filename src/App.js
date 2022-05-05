import { useState } from 'react';
import './App.css';
import Main from './Components/Main';

function App() {

  const [data,setData] = useState([]);
  const [first, setfirst] = useState({
  sNo : 0 ,  task : "" , taskDesc : "" , taskDate : ""
  })

  const handleChange = (e) => {
    setfirst({...first , [e.target.name]:e.target.value})
  }

  const print = () => {
    setData([...data , first])
  
  }

  const onDelete = (item) => {
    
    setData(data.filter((options) => {
      return options!=item;
     })
    )
  }
  

  return (

    <div className="App container">
    
    <h1> SCHEDULE YOUR TODO LIST </h1>

    <div className="container row justify-content-md-center">

    <div className="mb-3 w-75" >
    <input type="email" className="form-control text-center" placeholder="Write your TODO" name="task" onChange={handleChange} />
    </div>

    <div className="mb-3 w-75">
    <input type="text" className="form-control text-center" placeholder="Description of your TODO" name="taskDesc" onChange={handleChange} />

    <input type="date" className=" w-100 mt-2" onChange={handleChange} name="taskDate"  />

    <button type="button" class="btn btn-primary mt-2" onClick={print}>ADD TODO</button>

   </div>



    <table class="table">
  <thead>
    <tr>
      <th scope="col">TODO</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">DATE</th>
      <th scope="col">CHECK IF DONE</th>
      <th scope="col">DELETE</th>
    </tr>
    </thead>
    <tbody>
      
    {
            data.map((ele , index) => {
              return <tr>
              <td scope="col">{ele.task}</td>
              <td scope="col">{ele.taskDesc}</td>
              <td scope="col">{ele.taskDate}</td>
              <td scope="col"><input type="checkbox" id="cbox2" value="second_checkbox"/></td>
              <td scope="col"><button onClick={()=>{onDelete(ele)}} >DELETE</button>
              </td>
            
            </tr>
            })
    }
   
        
        </tbody>
  </table>
    
  {/* {
            data.map((ele , index) => {
                return <Main 
                ele={ele}
                 key={index} 
                 onDelete = {()=>{onDelete(ele)}} 
                 />
            })
    } */}

   

    </div> 
  </div>
  );
}

export default App;
