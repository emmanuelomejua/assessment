import React from 'react';
import Routes from './Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";



function App() {
  return (
    <> 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes/>
        <ToastContainer />
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
