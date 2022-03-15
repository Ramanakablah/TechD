import './App.scss';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Article from '../src/pages/Articles/Article';
import Event from '../src/pages/Events/Event';
import Referal from './pages/Referal/Referal';
import About from '../src/pages/about/About';
import Ambassdor from '../src/pages/ambassdor/Ambassdor';
import ApplyIntern from '../src/pages/applyInternship/Applyinternship';
import ApplyJob from '../src/pages/applyJob/Applyjob';
import Blogs from '../src/pages/blogs/Blogs';
import Contact from '../src/pages/contact-page/contactPage';
import Guidelines from '../src/pages/guidelines/Guidelines';
import Hackathons from '../src/pages/hackathons/Hackathons';
import Internship from '../src/pages/internships/Internships';
import Jobs from '../src/pages/jobs/Jobs';
import JoinCommunity from '../src/pages/join-community/Join';
import Login from '../src/pages/login/Login';

import Privacy from '../src/pages/privacy/Privacy';
import Register from '../src/pages/register/Register';
import Sponsors from '../src/pages/sponsors/Sponsors';
import Terms from '../src/pages/terms/Terms';
import OpenSource from '../src/pages/opensource/Opensource';

import RTFriend from '../src/pages/Referal/ReferToFriend';
import GReferal from '../src/pages/Referal/GetRefferal';






function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />



        <Route path='/about' component={About} />
        <Route path='/ambassador' component={Ambassdor} />
        <Route path='/referal' component={Referal} />
        <Route path='/applyInternship' component={ApplyIntern} />
        <Route path='/applyJob' component={ApplyJob} />
        <Route path='/articles' component={Article} />
        <Route path='/events' component={Event} />
        <Route path='/contact-us' component={Contact} />

        <Route path='/guidelines' component={Guidelines} />
        <Route path='/hackathons' component={Hackathons} />
        <Route path='/internship' component={Internship} />
        <Route path='/jobs' component={Jobs} />
        <Route path='/opensource' component={OpenSource} />
        <Route path='/community' component={JoinCommunity} />
        <Route path='/login' component={Login} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/sign-up' component={Register} />
        <Route path='/sponsors' component={Sponsors} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/ReferToFriend' component={RTFriend} />
        <Route path='/GetReferal' component={GReferal} />

        <Route path='/terms' component={Terms} />



      </Switch>
    </Router>
  );
}

export default App;
