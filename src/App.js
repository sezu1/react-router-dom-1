import './App.css';
import {UsersPage} from "./pages/usersPage/UsersPage";
import {MainPage} from "./pages/mainPage/MainPage";
import {PostsPage} from "./pages/postsPage/PostsPage";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";


function App() {
  return (
      <>
          <NavBar/>
          <Routes>
              <Route path="/">
                  <Route index element={<MainPage/>} />
                  <Route path ="posts" element={<PostsPage/>} />
                  <Route path ="users" element={<UsersPage/>} />
              </Route>
          </Routes>
      </>

  );
}

export default App;
