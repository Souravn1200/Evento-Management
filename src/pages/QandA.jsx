import React from 'react';

const QandA = () => {
    return (
        <div>
            <h2 className='mt-8 text-center text-4xl'> Here is some frequently asked question and answers! </h2>

        <div className='grid grid-cols-2 gap-4 mt-6'>
        <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Q1: Why should a company organize corporate events?
  </div>
  <div className="collapse-content"> 
    <p>A1: Corporate events serve multiple purposes, including team building, fostering employee engagement, promoting company culture, and celebrating milestones. These events provide an opportunity for employees to interact outside of the usual work environment, boosting morale and creating a sense of camaraderie.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Q2: How can a company ensure effective communication during a corporate event?
  </div>
  <div className="collapse-content"> 
    <p>A2: To ensure effective communication during a corporate event, companies should plan and utilize multiple communication channels. This includes clear event invitations, announcements, and utilizing technology such as event apps or internal communication platforms. Additionally, having a designated point of contact or an MC can help keep everyone informed.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Q3: What are some key considerations when planning a corporate event?
  </div>
  <div className="collapse-content"> 
    <p>A3: Key considerations for planning a corporate event include defining the event's purpose, setting a budget, choosing an appropriate venue, considering logistics, and creating a detailed agenda. It's essential to consider the preferences and needs of the participants to ensure the event is both enjoyable and productive.

</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Q4: How can a company measure the success of a corporate event?
  </div>
  <div className="collapse-content"> 
    <p>A4: Success metrics for a corporate event can include participant feedback, engagement levels, and achieving the event's objectives. Surveying attendees for their thoughts and analyzing key performance indicators (KPIs) related to the event's goals will help evaluate its overall success.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Q5: What are some creative ideas for team-building activities during a corporate event?
  </div>
  <div className="collapse-content"> 
    <p>A5: Creative team-building activities can include interactive workshops, problem-solving challenges, or even team-building games. Activities that encourage collaboration, communication, and problem-solving help strengthen team bonds and contribute to a positive corporate culture.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Q6: How can a company ensure inclusivity and diversity in corporate events?
  </div>
  <div className="collapse-content"> 
    <p>A6: To ensure inclusivity and diversity in corporate events, companies should consider diverse representation in event planning committees, offer a variety of activities that cater to different preferences, and provide options for dietary restrictions. Additionally, creating a safe and respectful environment fosters inclusivity.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Q7: What role does entertainment play in corporate events?
  </div>
  <div className="collapse-content"> 
    <p>A7: Entertainment adds a fun and engaging element to corporate events, contributing to the overall experience. Whether its live performances, guest speakers, or interactive sessions, well-planned entertainment helps keep attendees energized, motivated, and creates memorable experiences.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Q8: How can companies encourage networking at corporate events?
  </div>
  <div className="collapse-content"> 
    <p>A8: Companies can encourage networking by providing designated spaces for interaction, organizing ice-breaker activities, and facilitating group discussions or roundtable sessions. Name tags with roles and departments also make it easier for attendees to initiate conversations.</p>
  </div>
</div>
        </div>

        </div>
    );
};

export default QandA;