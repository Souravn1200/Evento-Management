import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const  {id} = useParams();

    return (
        <div>
            <h2>kaj hoitese</h2>
            {id}
        </div>
    );
};

export default ServiceDetails;