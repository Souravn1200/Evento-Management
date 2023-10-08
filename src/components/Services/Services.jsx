import { Link } from "react-router-dom";


const Services = ({eachData}) => {
  
    const {id, name, image, price, description} = eachData
    
    return (
        <div>
            <h2>
            <div className=" bg-base-100 shadow-xl">
  <figure><img className="h-[220px] w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions flex mt-3">
        <p className="font-bold">{price}</p>

        <Link to={`/services/${id}`}>
      <button className="btn btn-primary">Order Now!</button>
         </Link>
    </div>
  </div>
</div>
        
            </h2>
        </div>
    );
};

export default Services;