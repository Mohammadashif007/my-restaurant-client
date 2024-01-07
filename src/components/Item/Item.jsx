const Item = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex gap-6">
            <img className="w-[140px] rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div>
                <p>{name}----------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default Item;