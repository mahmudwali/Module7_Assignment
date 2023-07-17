import React, { useState } from 'react';

const App = () => {
  let [list,setList]=useState([]);
  let [item,setItem]=useState("");
  const AddToList=()=>{
    list.push(item)
    setList([...list]);

  }

  const removeFormList=(index)=>{
    list.splice(index,1)
    setList([...list]);
  }

  return (
    <div>
      <h1>To-Do list for my Assignment</h1>
      <input onChange={(e)=>setItem(e.target.value)} />
      <button onClick={()=>AddToList()}>Click</button>
      <table>
        <tbody>

            {
                list.length!==0?(
                  list.map((element,i)=>{
                    return(
                      <tr key={i.toString()}>
                        <td>{element}</td>
                        <td><button onClick={()=>{removeFormList()}}>Remove</button></td>

                      </tr>
                    )
                  })
                ):(<tr></tr>)
            }

        </tbody>
      </table>



    </div>
  );
};

export default App;