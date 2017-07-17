import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage.jsx';
import FeedPage from './pages/FeedPage.jsx';
import Header from './components/Header.jsx';
import store from './redux/store';

// how do we want to divide up where to put BrowserRouter, Provider, etc? We could put it in index.js
const App = () => {
	return (
	  <BrowserRouter>
			<Provider store={store}>
					<div className="App">
						<Header />
		        <Route exact path="/" component={FeedPage} />
			      <Route path="/profile" component={ProfilePage} />
		      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;