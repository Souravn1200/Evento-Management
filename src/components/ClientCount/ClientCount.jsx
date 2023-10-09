import React from 'react';
import Marquee from "react-fast-marquee";
import SlotCounter from 'react-slot-counter';
import a from '../../assets/10.svg'
import b from '../../assets/9.svg'
import c from '../../assets/8.svg'
import d from '../../assets/7.svg'
import f from '../../assets/6.svg'
import g from '../../assets/5.svg'
import h from '../../assets/4.svg'
import i from '../../assets/3.svg'
import j from '../../assets/2.svg'
import k from '../../assets/1.svg'



const ClientCount = () => {
    return (
        <div className='mt-10 hidden lg:block'>

            <h2 className='text-3xl text-center mb-6 font-semibold'>Client Counter</h2>

            <div className="stats mx-auto  lg:ml-60 bg-[#BDCDD6] py-2">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Users</div>
    <div className="stat-value text-primary"> <SlotCounter value={23706} /></div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Client Likes!</div>
    <div className="stat-value text-secondary"> <SlotCounter value={20437} /></div>
    <div className="stat-desc">12% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-value"><SlotCounter value={1235} /></div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>

<h2 className='text-3xl text-center mt-8 mb-6 font-semibold'> Our Clients</h2>
<Marquee className='mt-10'>

        <img src={a} className='h-[100px] mr-14 w-[100px]' alt="" />
        <img src={b} className='h-[100px] mr-14 w-[100px] ' alt="" />
        <img src={c} className='h-[100px] mr-14 w-[100px] ' alt="" />
        <img src={d} className='h-[100px] mr-14 w-[100px] ' alt="" />
        <img src={k} className='h-[100px] mr-14 w-[100px] ' alt="" />
        <img src={f} className='h-[100px] mr-14 w-[100px] ' alt="" />
        <img src={g} className='h-[100px] mr-14 w-[100px] ' alt="" />
        <img src={h} className='h-[100px] mr-14 w-[100px] ' alt="" />
        <img src={i} className='h-[100px] mr-14 w-[100px]' alt="" />
        <img src={j} className='h-[100px] mr-14 w-[100px] ' alt="" />

</Marquee>

        </div>
    );
};

export default ClientCount;