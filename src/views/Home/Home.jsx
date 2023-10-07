import { Navigate } from 'react-router-dom';
import { useACL } from '../../hooks/useACL';
import { useStage } from '../../hooks/useStage';

export const Home = () => {

  const { isManager } = useACL();
  const { item } = useStage('role');

  return <Navigate to={isManager(item) ? "/manager" : "/user"}/>
}

