import Router from './src/Router';
import { UserContextProvider } from './src/context/UserContext';



function App() {

  return (

    <UserContextProvider>

      <Router />

    </UserContextProvider>

  );
}

export default App;