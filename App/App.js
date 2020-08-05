import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import createStore from "App/Stores";
import RootScreen from "./Containers/Root/RootScreen";
import Toast from "react-native-toast-message";

const { store, persistor } = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </PersistGate>
      </Provider>
    );
  }
}
