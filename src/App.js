import React, { useState } from 'react';
import UseState from './components/UseState/UseState'
import UseEffect from './components/UseEffect/UseEffect'
import UseRef from './components/UseRef/UseRef'
import UseMemo from './components/UseMemo/UseMemo'
import UseCallback from './components/UseCallback/UseCallback'
import UseContext from './components/UseContext/UseContext'
import MyHooks from './components/MyHooks/MyHooks'
import './App.css'

const App = () => {
  return (
    <div style={{ paddingTop: 30 }}>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseContext /> ВМЕСте с useReducer!!! */}
      <MyHooks />
    </div>
  );
};

export default App;