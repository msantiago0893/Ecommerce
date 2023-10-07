import {
  Outlet,
  Navigate
} from 'react-router-dom';

export const RoleGuard = ({roles}) => {
  let rol = localStorage.getItem('role');

  return (roles.includes(rol)) ?
    <Outlet/> :
    <Navigate replace to="/"/>;
}

