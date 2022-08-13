import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AppRoutes () {
    return (
        <Routes>           
            <Route path='/' element={<SignIn />}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/details/:id' element={<Details />}/>

            <Route path='/home' element={<Home />}/>
            <Route path='/register' element={<SignUp/>}/>
            
        </Routes>
    )
}
