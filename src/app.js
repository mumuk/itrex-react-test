import React from 'react';
import ReactDOM from 'react-dom';
import {TableComponent} from "./Components/TableComponent";
import {Provider} from "react-redux";
import {store} from "./store/configureStore"


const jsx = (

<Provider store={store}>
  <div>Main component
  <TableComponent/>
  </div>
</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))