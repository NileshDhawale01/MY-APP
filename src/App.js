import './App.css';
import Header from './componants/Header/Header';
import Sidebar from './componants/Sidebar/Sidebar';
import Footer from './componants/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './componants/Content/Content';
import User from './componants/User/User';
import AddUser from './componants/AddUser/AddUser';

function App() {
  return (
    <div className="App" style={{position:"relative"}}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Footer />
        <Routes>
          <Route path='/user' element={<Content />} />
          <Route path='/oneUser/:userId' element={<User />} />
          <Route path='/addUser' element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
