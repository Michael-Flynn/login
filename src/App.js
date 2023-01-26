import './App.css';
import Login  from './Login';
/*import { Register } from './Register';*/
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Preferences from './Preferences';
import useToken from './useToken';

function App() {
 /* const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } */
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
   /* <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register />
      }
    </div> */
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
