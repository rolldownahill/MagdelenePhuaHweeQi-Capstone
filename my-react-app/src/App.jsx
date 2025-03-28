import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className = "title">
      <h1>Finance Dashboard</h1>

      </div>

      <div className="interactiveFields">
      <input 
        type="text" 
        placeholder="Stock Symbol"
        className="my-input" // Optional: for styling
      />
       <input 
        type="text" 
        placeholder="Quantity"
        className="my-input" // Optional: for styling
      />
       <input 
        type="text" 
        placeholder="Purchase Price"
        className="my-input" // Optional: for styling
      />

      <div id = "addStockButton" >
        <button>
          <p> Add Stock</p>
        </button>

      </div >

      </div>
        

        <div className = "stockList">

        <h1>Stock List</h1>
        <p>No stocks added yet.</p>

        </div>
    </>
  )
}

export default App
