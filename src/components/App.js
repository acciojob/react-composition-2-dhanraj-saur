
import React, { useState } from 'react';
import './../styles/App.css';

import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className='model-close'>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;



// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Hello, World!</title>
   
//   </head>
//   <body>
//       <div class="output">
        
//       </div>
      
//       <button>Head</button> 
//       <button>Tail</button>
      
//         <script>
          
          
          
          
//         </script>
//   </body>
// </html>