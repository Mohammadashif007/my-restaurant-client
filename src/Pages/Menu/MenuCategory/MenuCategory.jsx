import { Link } from "react-router-dom";
import Item from "../../../components/Item/Item";
import Cover from "../../Shared/Cover";

const MenuCategory = ({ item, coverImg, coverTitle }) => {
    return (
        <div>
            {coverTitle && <Cover img={coverImg} title={coverTitle}></Cover>}
            <div className="w-4/5 mx-auto my-10">
                <div className="grid md: grid-cols-2 gap-6">
                    {item.map((item) => (
                        <Item key={item._id} item={item}></Item>
                    ))}
                </div>
                <div className="text-center">
                    <Link to={`/order/${coverTitle}`}>
                        <button className="btn btn-outline mt-10 border-b-4">
                            ORDER YOUR FAVOURITE FOOD
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;
