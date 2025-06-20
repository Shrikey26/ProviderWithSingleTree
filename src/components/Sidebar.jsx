import { useAppContext } from '../AppContext';

function Sidebar() {
  const { user } = useAppContext();
  return <div>Sidebar (Client Only) - Hello {user.name}</div>;
}

export default Sidebar;