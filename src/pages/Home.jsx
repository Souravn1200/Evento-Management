import { useLoaderData } from "react-router-dom";
import Banner from "../components/Navbar/Banner/Banner";
import Services from "../components/Services/Services";
import ClientCount from "../components/ClientCount/ClientCount";
// import React, { useEffect, useState } from 'react';

const Home = () => {
const data = useLoaderData();

    // const [data, setData] =  useState([]);

    // useEffect(() => {
    //     fetch('/public/Events.json')
    //     .then(res => res.json())
    //     .then(result =>setData(result))
    //     .catch(err => console.log(err));
    // },[])

    return (
        <div>
            <Banner></Banner>


            <div>
            <h2 className="text-3xl mt-7 mb-7 text-center">Our Services</h2>
            <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {data.map(eachData => <Services key={eachData.id} eachData={eachData}></Services>)}
            </div>
            </div>
           
           <ClientCount></ClientCount>

            
           
        </div>
    );
};

export default Home;