import ApplicationLayout from "./core/layout";
import "./styles/globals.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from "./features/pages/NotFound";
import Home from "./features/pages/Home";
import GamePlayground from "./features/pages/GamePlayground";
function App() {
  return (
    <div className="bg-gradient-to-b from-background from-60% to-rose-900 text-foreground min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ApplicationLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/create" element={<GamePlayground/>}/>
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
