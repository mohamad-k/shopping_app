import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk"



const store = createStore(cartReducer, compose(applyMiddleware(thunk)));



ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

