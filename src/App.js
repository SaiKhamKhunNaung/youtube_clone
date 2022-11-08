import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import RecommendedVideos from './components/recommendedVd/RecommendedVideos'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom";
import SearchPage from './components/search/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
      <Switch>
          <Route path="/search/:searchTerm">
            <div className='app_page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
