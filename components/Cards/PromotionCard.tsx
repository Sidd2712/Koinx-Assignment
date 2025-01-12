import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function PromotionCard() {
    return (
        <div className="bg-[#0052FE] w-full h-[65vh] rounded-2xl shadow-lg flex flex-col items-center justify-center p-5 gap-3">
            <p className="w-[80%] text-wrap text-center text-2xl text-white font-bold space-y-5">Get Started with KoinX for FREE</p>
            <p className="text-md text-white text-center">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <img src="/images/Frame.png" alt="" className="w-[200px] h-[200px]"/>
            <button className="bg-[white] text-black text-md font-bold px-4 py-3 mt-4 rounded-lg">Get Started for FREE <ArrowForwardIcon/></button>
        </div>
    );
}