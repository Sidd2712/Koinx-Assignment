"use client";
import axios from "axios";
import { useEffect ,useState} from "react";
import TradingViewWidget from "../Cards/TradingViewWidget";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Bitcoin() {
    const [data, setdata] = useState<any>([]);
    const [loading,setloading] = useState<boolean>(true);
    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=7';
        const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-api-key':process.env.NEXT_APP_KEY},
        };

        axios.get(url, options)
        .then(res => {
            setdata(res.data.bitcoin);
            setloading(false);
            // console.log(res.data.bitcoin);
        }).catch(err => console.error(err));
    }, []);
    return (
        <div className="bg-[white] w-auto h-auto p-5  md:p-8 rounded-lg flex flex-col gap-4">
            <div className="flex flex-col justify-between items-start gap-6">
                <h1 className="flex gap-3 items-center">
                    <img src="images/Bitcoin.png" alt="" />
                    <span className="text-xl font-bold">Bitcoin</span>
                    <span className="text-sm ">BTC</span>
                    <span className="rounded-lg text-sm bg-gray-500 text-white p-2">Rank #1</span>
                </h1>
                <div className="flex gap-2 flex-col">
                   <div className="flex gap-2 items-center">
                         <p className="text-xl font-bold">
                            ${parseFloat(data.usd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>

                        <div className="flex gap-2 items-center text-sm">
                            {data.usd_24h_change<0?(
                                <span className="text-red-500 bg-red-100 rounded-lg p-1 text-sm flex items-center">
                                        <ArrowDropDownIcon className="text-red-500"/>
                                    {parseFloat(data.usd_24h_change).toFixed(2)}%
                                    </span>)
                                :(<span className="text-green-500 bg-green-100 rounded-lg p-1 text-sm flex items-center">
                                        <ArrowDropUpIcon className="text-green-500"/>
                                    {parseFloat(data.usd_24h_change).toFixed(2)}%
                                    </span>)}
                                    <span className="text-sm text-gray-500">(24h)</span>
                        </div>

                   </div>
                    <p className="flex items-start text-gray-500">
                        ${parseFloat(data.usd_24h_vol).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
            </div>
            <hr className="bg-gray-400 h-[1px]"/>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <span className="text-lg font-bold">Bitcoin Price Chart(USD)</span>
                <div className="flex gap-3 text-xs text-gray-500">
                    <button className="rounded-full bg-blue-200 px-2 font-bold text-blue-600">1H</button>
                    <button>24H</button>
                    <button>7D</button>
                    <button>1M</button>
                    <button>3M</button>
                    <button>6M</button>
                    <button>1Y</button>
                    <button>ALL</button>
                </div>
            </div>
            <div className="w-full h-[400px] overflow-hidden">
            <TradingViewWidget />
            </div>

        </div>
    );
}