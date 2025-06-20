import { useAppContext } from '../AppContext';

export default function MainContent() {
  const { user } = useAppContext();
  return <div>Main Content (SSR) - User: {user.name}</div>;
}