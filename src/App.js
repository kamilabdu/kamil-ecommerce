import { useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route, NavLink} from 'react-router-dom';


import './App.css'
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer'
import Navelinks from './Navlinks'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{loggedinuser}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      }else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Routes><Route path="/" element={<Navelinks/>}/> </Routes>
        <Routes><Route path="/" element={<Home/>}/> </Routes>
        <Routes><Route path="/" element={<Footer/>}/> </Routes>
        

        <Routes><Route path="/checkout" element={<Checkout/>}/> </Routes>
        
      </div>
    </Router>
  );
}

export default App;
