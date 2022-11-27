import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
// import HooksCakeConatiner from './component/HooksCakeConatiner'
import CakeContainer from './component/cakeContainer'
import IceCreamContainer from './component/iceCreamContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <HooksCakeConatiner /> */}
      <CakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
