import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <h1>I'm creating my branch</h1>
    </div>
  );
}

export default App;
