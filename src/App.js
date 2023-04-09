import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
