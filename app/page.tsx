"use client";
import PromotionCard from "@/components/Cards/PromotionCard";
import TrendingCoinCard from "@/components/Cards/TrendingCoinCard";
import AboutBitCoin from "@/components/Frames/AboutBitCoin";
import Bitcoin from "@/components/Frames/Bitcoin";
import Sentiments from "@/components/Frames/Sentiments";
import Team from "@/components/Frames/Team";
import Tokennomics from "@/components/Frames/Tokennomics";
import Performance from "@/components/Frames/Performance";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export default function Home() {
  return (
    <>
    <div className="bg-[#EFF2F5] min-h-100vh w-[100vw] flex flex-col lg:flex-row px-4 md:px-16 py-10 gap-4 overflow-hidden">
      <div className="lg:w-[70%] flex justify-center flex-col h-full gap-5">
        <span className="flex flex-col gap-2">
          <span className="text-gray-400 text-sm">
            <span>CryptoCurrencies</span>
            <KeyboardDoubleArrowRightIcon />
            <span className="text-black ">Bitcoin</span>
          </span>
          <Bitcoin />
        </span>
        <span className="flex flex-col gap-3">
          <div className="text-gray-500 font-semibold gap-4 lg:gap-2 border-b border-gray-300 py-2 px-4 flex justify-between overflow-scroll">
            <span className="text-blue-500 border-b font-extrabold">Overview</span>
            <span>Fundamentals</span>
            <span>New Sights</span>
            <span>Sentiments</span>
            <span>Team</span>
            <span>Technicals</span>
            <span>Tokenomics</span>
          </div>
          <Performance />
        </span>
        <Sentiments/>
        <AboutBitCoin />
        <Tokennomics />
        <Team />
      </div>
      <div className="lg:w-[30%] flex justify-center flex-col h-full  gap-4 mt-8">
        <PromotionCard />
        <TrendingCoinCard />
      </div>
    </div>
    </>
  );
}
