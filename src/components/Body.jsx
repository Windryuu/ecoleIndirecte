import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>ROOOTA
            <Link to="bleep">Bleep</Link>
        </div>
    },
    {
        path: '/bleep',
        element: <div>Bleep bleep !</div>
    }
])

function Body(){
    return(
        <RouterProvider router={router}>
            <div></div>
        </RouterProvider>
    )
}

export default Body;