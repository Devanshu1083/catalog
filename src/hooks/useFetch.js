import { useEffect,useState } from "react";
import {fetchData} from "../utils/api";
const useFetch = (endpoint)=>{

    const [data,setData] = useState();

    // useEffect(async()=>{
    //     const makeApiCall = async()=>{

    //         const res = await fetchData(endpoint);
    //         setData(res);
    //     }
    //     makeApiCall();
    // },[endpoint]);

    // return {data};
    useEffect(() => {
        const fetchDataAsync = async () => {
          try {
            const res = await fetchData(endpoint);
            setData(res);
          } catch (error) {
            // Handle error if necessary
            console.error("Error fetching data:", error);
          }
        };
    
        fetchDataAsync();
    
        // Cleanup function if needed
        return () => {
          // Perform cleanup if necessary
        };
      }, [endpoint]);
    
      return { data };

}
export default useFetch;