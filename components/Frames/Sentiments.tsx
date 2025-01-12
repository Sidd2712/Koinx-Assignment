import InfoIcon from '@mui/icons-material/Info';
export default function Sentiments() {

    return (
        <div className="bg-[white] w-full h-auto gap-4 rounded-lg flex flex-col justify-around p-6 overflow-hidden ">
            <h1 className='text-3xl font-bold'>Sentiment</h1>
            <div className='h-auto mx-2 my-6 w-full flex flex-col gap-4'>
                <h2 className='text-lg font-bold'>Key Events <InfoIcon className='text-gray-400'/></h2>
                
                <div className='flex flex-col md:flex-row overflow-scroll h-auto gap-4 w-full '>
                    <div className='flex bg-[#e7f4fd] rounded-lg p-4 gap-4 lg:w-2/3'>
                        <img src="images/news.png" alt="" className='bg-blue-500 rounded-full h-[40px] w-auto p-1'/>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-semibold'>Lorem ipsum dolor, sit amet consectetur </h2>
                            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, vitae cupiditate provident voluptas corporis accusantium impedit natus expedita ab quo, illum molestias ad nihil facilis nulla officia vero? Obcaecati, ea. lore</p>
                        </div>
                    </div>
                    <div className='flex bg-[#ebf9f4] rounded-lg p-4 gap-4 lg:w-2/3'>
                        <img src="images/increase.png" alt="" className='bg-green-500 rounded-full h-[40px] w-auto p-1'/>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-semibold'>Lorem ipsum dolor, sit amet consectetur </h2>
                            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, vitae cupiditate provident voluptas corporis accusantium impedit natus expedita ab quo, illum molestias ad nihil facilis nulla officia vero? Obcaecati, ea. lore</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-auto mx-2 my-2 w-full flex flex-col gap-4'>
                <h3 className='text-lg font-bold'>Analyst Estimates <InfoIcon className='text-gray-400'/></h3>
                <div className='flex gap-4'>
                    <div className='bg-[#ebf9f4] text-green-500 rounded-full flex justify-center items-center min-w-[100px] min-h-[100px] mr-3'>
                        <span className='text-4xl font-semibold'>76</span><span>%</span>                      
                    </div>
                    <div className='flex flex-col w-full gap-4 text-gray-500'>
                        <div className="flex gap-6 w-full items-center">
                           <span >Buy</span> <p className='bg-green-600 w-[76%] h-[10px] rounded-sm'></p><span>76%</span>
                        </div>
                        <div className="flex gap-6 w-full items-center">
                           <span >Hold</span> <p className='bg-gray-600 w-[8%] h-[10px] rounded-sm'></p><span>8%</span>
                        </div>
                        <div className="flex gap-6 w-full items-center">
                           <span >Sell</span> <p className='bg-red-600 w-[16%] h-[10px] rounded-sm'></p><span>16%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}