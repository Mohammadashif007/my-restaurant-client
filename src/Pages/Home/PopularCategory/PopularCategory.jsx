import Item from "../../../components/Item/Item";
import useMenu from "../../../hooks/useMenu";

const PopularCategory = () => {
    
    const [menu] = useMenu();
    const popularCategory = menu.filter(item => item.category === "popular");

    return (
        <div className="w-4/5 mx-auto my-10">
            <div className="grid md: grid-cols-2 gap-6">
                {popularCategory.map((item) => (
                    <Item key={item._id} item={item}></Item>
                ))}
            </div>
            <div className="text-center">
                <button className="btn btn-outline mt-10 border-b-4">
                    View Full Menu
                </button>
            </div>
        </div>
    );
};

export default PopularCategory;
