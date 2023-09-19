import React from 'react'
import Image from "next/image";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { GoShare } from "react-icons/go";

const Index = () => {
  return (
    <div className='border border-gray-400 p-3 pb-0 border-x-0 border-b-0 hover:bg-slate-900 transition-all cursor-pointer'>
      <div className='grid grid-cols-12 '>
        <div className='col-span-1'>
          <Image
            src="https://avatars.githubusercontent.com/u/106095275?v=4"
            alt='avatar'
            height={50}
            width={50}
            className='rounded-full'
          />
        </div>
        <div className='col-span-11 p-1'>
          <h5 className='font-bold'>Abdul</h5>
          <p className='asd text-sm '>At the risk of stating the obvious, I don’t know what’s going on with every part of this platform all the time, but our policy worldwide is to fight for maximum freedom of speech under the law.</p>
          <div className='grid grid-cols-10 text-xl mt-1'>
            <div className='col-span-2 hover:bg-slate-500 h-fit w-fit rounded-full p-1'>
              <BiMessageRounded />
            </div>
            <div className='col-span-2 hover:bg-slate-500 h-fit w-fit rounded-full p-1'>
              <BiRepost />
            </div>
            <div className='col-span-2 hover:bg-slate-500 h-fit w-fit rounded-full p-1'>
              <AiOutlineHeart />
            </div>
            <div className='col-span-2 hover:bg-slate-500 h-fit w-fit rounded-full p-1'>
              <VscGraph />
            </div>
            <div className='col-span-2 hover:bg-slate-500 h-fit w-fit rounded-full p-1'>
              <GoShare />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Index