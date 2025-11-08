import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Login from './components/Login'
import Profile from './components/Profile'
import Body from './components/Body'
import Feed from './components/Feed'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
function App() {

  return (
    <>
    <Provider store={appStore}>
      {/* Provider make available the redux store to the app */}
    <BrowserRouter basename='/'>
    <Routes>

      {/* order matters here  */}
      <Route path="/" element={<Body/>}>
        <Route path="login" element={<Login />}/>
        <Route path="feed" element={<Feed />}/>
        <Route path="profile" element={<Profile />}/>
      </Route>

    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
