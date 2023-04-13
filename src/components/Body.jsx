import { useQuery } from "@tanstack/react-query";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>ROOOTA
            <Link to="bleep">Bleep</Link>
        </div>
    },
    {
        path: '/bleep',
        element: <div><TestQuery/></div>
    }
])

function Body(){
    return(
        <RouterProvider router={router}>
            <div></div>
        </RouterProvider>
    )
}

function TestQuery(){
    const {data, error, isError, isLoading} = useQuery({queryKey:['voitures'], queryFn: fetchFromApi});
    if(isLoading){
        console.log(data);
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! {error.message}</div>
    }
    return(
        <div>
            {
                data.map((voiture, index) => {
                    const obj = Object.keys(voiture).map(key => 
                        <li key={key}>{voiture[key]}</li>
                        )
                    return obj;
                })
            }
        </div>
    )
}

async function fetchFromApi(){
    const {data} = await axios.get('http://localhost:8080/voitures');
    return data;
}

export default Body;