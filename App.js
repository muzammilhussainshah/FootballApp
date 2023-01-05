
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
 
import Navigation from './src/router/Tab';
import { PortalProvider } from '@gorhom/portal';
import store from './src/store';

 import { Provider } from 'react-redux'; 
function App() {
   
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PortalProvider>
            <Navigation />
          </PortalProvider>
        </SafeAreaProvider>
      </Provider>
    ); 
}

export default App;
