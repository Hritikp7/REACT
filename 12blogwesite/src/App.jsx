import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/Auth"
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom"
 
function App() {
  const [loading, setloading] = useState(true); // when fetching data from application it may take some time, so we can do conditional rendering according to the state of loading variable ex. if loading true render loading icon else render data
  const dispatch = useDispatch()

  useEffect(()=>{
     authService.getCurrentUser()
     .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
     .finally(()=>
      setloading(false))
  },[])

  return (!loading) ? (
  <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  ) : null

}

export default App;
