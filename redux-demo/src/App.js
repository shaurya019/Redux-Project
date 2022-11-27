import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
// import HooksCakeConatiner from './component/HooksCakeConatiner'
import CakeContainer from './component/cakeContainer'
import IceCreamContainer from './component/iceCreamContainer'
import NewcakeContainer from './component/NewcakeContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <HooksCakeConatiner /> */}
      <CakeContainer />
      <IceCreamContainer />
      <NewcakeContainer />
    </div>
    </Provider>
  );
}

export default App;
