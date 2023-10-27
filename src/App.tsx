
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './views/auth/signin/signin';
import Signup from './views/auth/signup/signup';

import './App.css';

import { lazy, Suspense } from 'react';
import DetailCategory from './views/manager/category/detail-category/detail-category';

const Manager = lazy(() => import('./views/manager/manager'));
const Categories = lazy(() => import('./views/manager/category/categories/categories'));
const AddCategory = lazy(() => import('./views/manager/category/add-category/add-category'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/manager" element={<Manager />}>
            <Route index element={<Categories />} />
            <Route path="users" element={<Categories />} />
            <Route path="addUser" element={<AddCategory />} />
            <Route path="categories" element={<Categories />} />
            <Route path="addCategory" element={<AddCategory />} />
            <Route path="category/:id" element={<AddCategory />} />
            <Route path="detail-category/:id" element={<DetailCategory />} />
            <Route path="products" element={<Categories />} />
            <Route path="addProduct" element={<AddCategory />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
