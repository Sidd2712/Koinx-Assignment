"use client";
import { useEffect,useState } from "react";
import CoinsCard from "../Cards/CoinsCard";
import axios from "axios";
import Loading from "../Loading";

export default function Footer() {
    const [loading, setloading] = useState<boolean>(true);
    const [data, setdata] = useState<any>([]);
    useEffect(() => {
        setloading(true);
        const url = 'https://api.coingecko.com/api/v3/search/trending';
        const options = {
            headers: {
                accept: 'application/json',
                'x-cg-pro-api-key': process.env.NEXT_APP_KEY,
            },
        };

        axios.get(url, options)
            .then((res) => {
                // console.log(res.data.coins);
                setdata(res.data.coins);
                setloading(false);
            })
            .catch((err) => {
                console.error(err);
                
            });
    }, []);
    if(loading){
     return <Loading />;
    }
    return (
        <div className="bg-white h-auto w-[100vw] flex flex-col gap-4 p-8" >
            <h1 className="text-2xl font-bold">You May Also Like</h1>
            <div className=" w-auto flex gap-5 flex-wrap items-start ">
            { data.map((element:any, index:any) => (
                <CoinsCard key={index} data={element.item} />
            ))};
            </div>
        </div>
    );
}
