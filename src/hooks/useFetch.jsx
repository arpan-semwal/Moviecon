import { useEffect, useState } from "react";
import { fetchDatafromApi } from "../API/api";

const useFetch = (url) => {
    const [data, setData] = useState(null); // three states are defined setData , setLoading and setError
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null); // rn the set data and error is set to null and when it will be call again the data and error are set to null again
        setError(null);

        fetchDatafromApi(url) // fecth data from api 
            .then((res) => {  // is it is successfull then the setloading is set false and the response is saved to setdata 
                setLoading(false); 
                setData(res);
            })
            .catch((err) => { // is false the setloading is still set to flase and error msg is shown
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;