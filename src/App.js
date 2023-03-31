import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <p>Ismail</p>
    </div>
  );
}

export default App;
