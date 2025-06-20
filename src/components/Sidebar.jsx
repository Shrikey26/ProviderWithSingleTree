import { useAppContext } from '../AppContext';

export default function Sidebar() {
  const { user } = useAppContext();
  return <div>Sidebar (Client Only) - Hello {user.name}</div>;
}
