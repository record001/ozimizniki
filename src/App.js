import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './utils/user_data';
import Footer from './components/Footer';
function App() {
  const dispatch = useDispatch()
 
  
 
  useEffect(()=>{
    async function getData() {
      let fetchData =await fetch('https://uzimizniki.pythonanywhere.com/users')
      let json = await fetchData.json()
      dispatch(getUser(json))
    }
    getData()
  },[dispatch])
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
