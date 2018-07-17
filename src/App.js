import React, { Component } from 'react';
import './App.css';

import Library from './components/library/library.component';
import Header from './components/header/header.component';

class App extends Component {
  
  render() {
    return (
        <div className = 'app-main'  >

            <Header />

            <div className = 'app-body' >
                <Library />
            </div>
        </div>
    );
  }
}

export default App;

  

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
  
//   render() {
//     return (
//         <div className = 'app-main' >

          

//         </div>
//     );
//   }
// }

// export default App;