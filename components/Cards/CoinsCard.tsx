import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function CoinsCard(props:any) {
    return (
        <div className=" border border-gray-200 p-4 rounded-lg flex flex-col gap-2 w-full md:w-auto">
           <div className="flex gap-2 items-center">
            <img src={props.data.small} alt="" className="rounded-full"/>
            <div className='flex gap-2 p-3 items-center'>
                <p className="font-bold text-lg">{props.data.name}</p>
                {(props.data.data.price_change_percentage_24h.aed < 0)?(<div className="bg-red-100 p-1 rounded-lg flex w-auto">
                    <ArrowDropDownIcon className="text-red-600 "/>
                    <p>{parseFloat(props.data.data.price_change_percentage_24h.aed).toFixed(2)}%</p>
                </div>):(<div className="bg-[#EBF9F4] py-1 px-2 rounded-lg flex">
                    <ArrowDropUpIcon className="text-green-600 "/>
                    <p>{parseFloat(props.data.data.price_change_percentage_24h.aed).toFixed(2)}%</p>
                </div>)}
            </div>
           </div>
          <p className="font-semibold">${parseFloat(props.data.data.price).toFixed(3)}</p>
           
           <img src={props.data.data.sparkline} alt="" className="h-10"/>
        </div>
    );
}