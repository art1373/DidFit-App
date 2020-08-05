import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import createStore from "App/Stores";
import RootScreen from "./Containers/Root/RootScreen";
import Toast from "react-native-toast-message";
import { GoogleSignin } from "@react-native-community/google-signin";
import { GoogleConfig } from "./Config/googleConfig";

const { store, persistor } = createStore();

export default class App extends Component {
  componentDidMount() {
    GoogleSignin.configure({
      scopes: ["email"],
      webClientId: GoogleConfig.clientId,
      offlineAccess: true,
    });
  }
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
