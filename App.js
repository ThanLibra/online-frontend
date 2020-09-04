// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Imports: Screens
import Counter from './src/screens/Counter';

// Imports: Redux Store
import { store } from './src/redux/store/store';

// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
