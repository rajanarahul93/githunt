import { Route, Routes } from 'react-router-dom'
import Logo from './component/Logo'
import Users from './component/Routes/Users'
import UserInfo from './component/Routes/UserInfo'

function App() {
  return (
    <div>
      <div className=' app min-h-screen flex pr-20 pl-20 pt-2'>
        <div className='container  py-3'> 
          <Logo/> 
          <Routes>
            <Route path='/' element={<Users/>}> </Route>
            <Route path='/:login' element={<UserInfo/>}> </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;