import {
  Outlet,
  Navigate
} from 'react-router-dom';
import { useACL } from '../hooks/useACL';
import { useStage } from '../hooks/useStage';


export const SigninGuard = () => {
  console.log('GUARD SigninGuard ');

  const { isRoleExists } = useACL();
  const { item } = useStage('role');

  return <Navigate replace to={ (isRoleExists(item)) ? "/" : <Outlet />} />;
}
