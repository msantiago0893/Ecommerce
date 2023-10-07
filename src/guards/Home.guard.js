import {
  Outlet,
  Navigate
} from 'react-router-dom';
import { useACL } from '../hooks/useACL';
import { useStage } from '../hooks/useStage';


export const HomeGuard = () => {
  console.log('GUARD HOME ');

  const { isRoleExists } = useACL();
  const { item, removeAll } = useStage('role');

  if (isRoleExists(item)) {
    return <Outlet/>;
  } else {
    removeAll();
    return <Navigate replace to="/signin"/>;
  }

}
