import Home from "./pages/home/Home";
import {Route,BrowserRouter,Routes,} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs } from "./formSource";

function App() {
  return (

  //  timestamp

  // 2:28:33
  

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} inputs = {userInputs} title="Add New User"/>
            </Route>
            <Route path="products">
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New inputs = {userInputs} title="Add New Product"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
