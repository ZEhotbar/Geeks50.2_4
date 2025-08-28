import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./commpanents/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="post">
          <Route index element={<Posts/>}/>
          <Route path=":id" element={<PostDetail/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}
