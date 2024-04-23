import Main from "./Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () =>{
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main />
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
 
}

export default Body;
