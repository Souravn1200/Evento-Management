
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const  {id} = useParams();

    const users = useLoaderData();

    const user = users.find(user => user.id == id)




    return (
        <div>
        <h2>
        <div className=" bg-base-100 shadow-xl">
<figure><img className="h-[700px] w-full" src={user.image} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{user.name}</h2>
<p>{user.description}</p>
<div className="card-actions flex mt-3">
    <p className="font-bold">{user.price}</p>

</div>
</div>
</div>
    
        </h2>
    </div>
    );
};

export default ServiceDetails;