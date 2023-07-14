import React, { useState } from "react";  
import "../styles/App.css";


const App = () => {

  const [onClose, setOnClose] = useState(false);

  return (
      <div>
        <div>
          <button onClick={() => setOnClose(true)}>Show Modal</button>
        </div>
        
        {onClose ? <div className="model-overlay">
          <button className="model-close" onClick={() => setOnClose(false)}>Close</button>
          <p className="modal">This is the content of the modal</p>
        </div> : ""}

      </div>
    
  )
}
export default App;


