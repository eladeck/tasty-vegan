
import React from 'react';
import { AppContainer, HeaderContainer, Title } from './StyledApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Food from './Pages/Food/Food';
import Home from './Pages/Home/Home';
import OtherPage from './Pages/OtherPage/OtherPage';
import NavBar from './components/NavBar/NavBar';
import Seperator from './components/Seperator';

// <ReactPlayer url={'pouring-sauce-on-nice-cream.mp4'}>Cooking!</ReactPlayer>
const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <NavBar />
        <Seperator />
        <Switch>
          <Route path="/other-page">
            <OtherPage />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;

function Header() {
  return <HeaderContainer>
    <Title>Cooking with Elad</Title>
    {/* <Img src={'my-photo.jpeg'} /> */}
  </HeaderContainer>;
}

