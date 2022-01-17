import './tailwind.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Detail";
import NotFound404 from "./screens/NotFound404";

function App() {
  return (
    <div className="font-Roboto text-gray-900 font-medium">
      <header className="App-header h-10 bg-pink-500 flex bg-gradient-to-r from-indigo-400 to-indigo-600">
        <div className='container px-4 mx-auto flex flex-row justify-between items-center'>
          <Link to={'/'}>
            <h3 className='text-2xl font-bold text-white'>NFT</h3>
          </Link>
        </div>
      </header>
      <div className="container mx-auto px-4 mt-5 pb-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound404 />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
