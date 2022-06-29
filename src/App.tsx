import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import {Router} from './Routes'
export function App() {
  return (
    <>
      <Header/>
      <Router/>
      <GlobalStyle/>
    </>
  );
}


