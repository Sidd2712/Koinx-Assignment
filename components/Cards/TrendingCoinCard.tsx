"use client";
import { useEffect,useState } from "react";
import axios from "axios";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Loading from "../Loading";
export default function TrendingCoinCard() {
    const [data,setdata] = useState<any>([]);
    const [loading,setloading] = useState<boolean>(true);
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
                setdata(res.data.coins);
                setloading(false);
            })
            .catch((err) => {
                console.error(err);
                setloading(false);
            });
    }, []);
    if(loading||data.length===0){
       return <Loading/>
    }
    return (
        <div className="bg-[white] w-full min-h-[30vh] h-auto rounded-xl flex flex-col items-start justify-start p-5 gap-3">
           <h1 className="font-semibold text-black text-2xl">Trending Coins (24h)</h1>
           {[data[0], data[1], data[2]].map((item, index) => (
            <div className="flex items-center justify-between gap-3 w-full" key={index}>
                <div className="flex items-center gap-2">
                    <img src={item.item.small} alt="" className="rounded-full w-12"/>
                    <p className="font-semibold text-md">{item.item.name}</p>
                </div>
                {item.item.data.price_change_percentage_24h.aed < 0
                    ? <div className="bg-red-100 py-1 px-2 rounded-lg flex">
                        <ArrowDropDownIcon className="text-red-600 scale-125"/>
                        <p>{Math.abs(parseFloat(item.item.data.price_change_percentage_24h.aed)).toFixed(2)}%</p>
                    </div>
                    : <div className="bg-[#EBF9F4] py-1 px-2 rounded-lg flex">
                        <ArrowDropUpIcon className="text-green-600 scale-125"/>
                        <p>{parseFloat(item.item.data.price_change_percentage_24h.aed).toFixed(2)}%</p>
                    </div>
                }
            </div>
        ))}

        </div>
    );
}
