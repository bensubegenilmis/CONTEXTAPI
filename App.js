import Router from './src/Router';
import LangContext, { LangContextProvider } from './src/context/LangContext';
import { ThemeContextProvider } from './src/context/ThemeContext';



function App() {

  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </LangContextProvider>
  );
}

export default App;