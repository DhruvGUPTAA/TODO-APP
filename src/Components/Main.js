import React from 'react'
import './main.css'

export default function Main(props){

  return (
    <div className="container row justify-content-md-center"> 
        <h6><input type="checkbox" id="cbox2" value="second_checkbox"/> <label htmlFor="cbox2">


        <table class="table">
  <thead>
    <tr>
      <td scope="col">TODO</td>
      <td scope="col">DESCRIPTION</td>
      <td scope="col">DATE</td>
      <td scope="col">CHECK IF DONE</td>
      <td scope="col"><button onClick={props.onDelete}>DELETE</button></td>
    </tr>
    </thead>
  </table>


        </label>
            </h6>
        
        
     </div>
  )
}