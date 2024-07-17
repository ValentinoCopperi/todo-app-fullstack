import {Routes,Route, Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Todos';
import Sidebar from './components/ui/Sidebar';
import CompletedTodo from './pages/CompletedTodo';
import AddTodos from './pages/AddTodos';
export default function App() {


  const Layout = () => {
    return (
      <div className='bg-[#e8e8e8] min-h-screen w-full'>
        <Sidebar/>
        <div className='w-[70%] md:w-[80%] mx-auto  py-10'>
            <Outlet/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element : (
        <Layout/>
      ),
      children:[
        {
          path : "/",
          element:<Home/>
        },
        {
          path : "/completed",
          element:<CompletedTodo/>
        },
        {
          path : "/add",
          element:<AddTodos/>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

