import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout  from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
          <div className="App">

            <Layout></Layout>
          </div>

    </BrowserRouter>

  );
}

export default App;
