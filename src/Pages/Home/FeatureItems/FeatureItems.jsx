import { useEffect, useState } from "react";
import Item from "../../../components/Item/Item";

const FeatureItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const featureItems = data.filter(
                    (item) => item.category === "popular"
                );
                setItems(featureItems);
            });
    }, []);
    return (
        <div className="w-4/5 mx-auto my-10">
            <div className="grid md: grid-cols-2 gap-6">
                {items.map((item) => (
                    <Item key={item._id} item={item}></Item>
                ))}
            </div>
            <div className="text-center">
                <button className="btn btn-outline mt-10 border-b-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default FeatureItems;
