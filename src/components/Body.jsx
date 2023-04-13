import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>ROOOTA
            <a href="/bleep">bleep</a>
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