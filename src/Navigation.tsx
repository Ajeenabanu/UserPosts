import App from "./App";
import SinglePost from "./SinglePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Navigation() {
  return (
    <p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/SinglePost" element={<SinglePost />}></Route>
        </Routes>
      </BrowserRouter>
    </p>
  );
}
