import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="card bg-base-100 shadow-xl relative">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <p className="bg-gray-950 text-white absolute right-8 top-2 px-2 py-1 rounded">
                ${price}
            </p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <Link to="/secret">
                        <button className="btn btn-primary uppercase">
                            add to cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
