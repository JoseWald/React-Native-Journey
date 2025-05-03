import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {AppNavigator} from './navigation/AppNavigator';
import {loadFavorites} from './services/storage';
import {setFavorites} from './redux/actions';

const App = () => {
  useEffect(() => {
    const initializeApp = async () => {
      const favorites = await loadFavorites();
      store.dispatch(setFavorites(favorites));
    };
    initializeApp();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;