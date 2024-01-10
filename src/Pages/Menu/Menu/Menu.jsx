import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuBanner from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    
    return (
        <div>
            <Helmet>
                <title>Restaurant App | Menu</title>
            </Helmet>
            <Cover img={menuBanner} title={"our menu"}></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
           <MenuCategory item={offered} ></MenuCategory>
           <MenuCategory item={dessert} coverImg={dessertImg} coverTitle={"dessert"}></MenuCategory>
           <MenuCategory item={pizza} coverImg={pizzaImg} coverTitle={"pizza"}></MenuCategory>
           <MenuCategory item={salad} coverImg={saladImg} coverTitle={"salad"}></MenuCategory>
           <MenuCategory item={soup} coverImg={soupImg} coverTitle={"soup"}></MenuCategory>
           
        </div>
    );
};

export default Menu;