import './App.css';
import Layout  from './pages';
import { ToastProvider } from 'react-toast-notifications';


const App = () => {
  return (
    <div className="App">
      <ToastProvider>
        <Layout/>
      </ToastProvider>
    </div>
  );
}

export default App;
