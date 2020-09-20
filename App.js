// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';
// Imports: Redux Store
import { store } from './src/redux/store/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppNavigator } from './src/navigation/AppNavigator';

// React Native App
export default function App() {
  return (
		// Redux: Global Store
		<Provider store={store}>
			<PaperProvider>
				<AppNavigator />
			</PaperProvider>
		</Provider>
  );
}
