import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Signin } from '../views/Auth/Signin/Signin';
import { Signup } from '../views/Auth/Signup/Signup';
import { ForgotPassword } from '../views/Auth/ForgotPassword/ForgotPassword';
import { User } from '../views/User/User';
import { Main } from '../views/User/Main/Main';
import { Gallery } from '../views/User/Gallery/Gallery';
import { Home } from '../views/Home/Home';

import { HomeGuard } from '../guards/Home.guard';
import { RoleGuard } from '../guards/Role.guard';

import { Manager } from '../views/Manager/Manager';

import { Suspense } from 'react';
// import { Suspense, lazy } from 'react';
// const Login = lazy(() => import('../views/Login/Login')); //Aplicando lazy loading

import RoleCatalog from '../constants/RoleCatalog';

export const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>

        <Router>
          <Routes>
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            {/* <Route exact path="/signin" element={ <Navigate to={"/"} /> } /> */}

            <Route path="/" element={<HomeGuard />}>
              <Route index element={<Home />} />

              <Route element={<RoleGuard roles={[RoleCatalog.MANAGER]} />}>
                <Route path="manager" element={<Manager />} />
              </Route>

              <Route element={<RoleGuard roles={[RoleCatalog.USER]} />}>
                <Route path="user" element={<User />}>
                  <Route index element={<Main />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="*" element={<Main />} />
                </Route>

              </Route>

            </Route>
            <Route path="*" element={<Signin />} />

          </Routes>
        </Router>

      </Suspense>

    </>
  )
}
