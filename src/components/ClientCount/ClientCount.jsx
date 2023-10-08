import React from 'react';
import SlotCounter from 'react-slot-counter';
const ClientCount = () => {
    return (
        <div className='mt-10'>

            <h2 className='text-3xl text-center mb-6'>Client Counter!!</h2>

            <div className="stats mx-auto ml-56">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Users</div>
    <div className="stat-value text-primary"> <SlotCounter value={23706}  startValueOnce={true} /></div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Client Likes!</div>
    <div className="stat-value text-secondary"> <SlotCounter value={20437} startValueOnce={true} /></div>
    <div className="stat-desc">12% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-value"><SlotCounter value={1235} startValueOnce={true}  /></div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
        </div>
    );
};

export default ClientCount;