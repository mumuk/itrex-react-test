import React from 'react';
import ReactDOM from 'react-dom';
import {TableContainer} from "./Components/TableContainer";
import {Provider} from "react-redux";
import {store} from "./store/configureStore"


const jsx = (

<Provider store={store}>
  <>
  <TableContainer/>
  </>
</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))