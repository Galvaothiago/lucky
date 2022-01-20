import { Header } from "./components/header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./global";
import { Login } from './components/Login'
import { useStateValue } from "./components/context/StateProvider";

function App() {
  const [{ user }] = useStateValue()
  
  return (
    <>
      { !user ? (
        <>
          <Login />
          <GlobalStyle />
        </>
      ) : (
        <>
        <Header />  
        <Dashboard />
        <GlobalStyle />
     </>
      )}
    </>
  );
}

export default App;
