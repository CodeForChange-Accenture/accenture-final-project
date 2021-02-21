import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/global";
import Routes from "./routes";

import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  );
};

export default App;
