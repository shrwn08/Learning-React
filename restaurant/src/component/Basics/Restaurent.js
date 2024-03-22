import React from 'react';
import "./styles.css";
import MenuCard from "./MenuCard";
import menu from './Menu.json';


const Restaurant = () => {
    const [menuData,setMenuData] = React.useState(menu)
    const   filterItem = (category) => {
        const updateList =menu.filter((ele)=>{
            return ele.category === category
        });
        setMenuData(updateList)
    }

    return (
        <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group_item' onClick={()=>filterItem("Breakfast")}>Breakefast</button>
                <button className='btn-group_item' onClick={()=>filterItem("Lunch")}>Lunch</button>
                <button className='btn-group_item' onClick={()=>filterItem("Snacks")}>Snacks</button>
                <button className='btn-group_item' onClick={()=>filterItem("Dinner")}>Dinner</button>
                <button className='btn-group_item' onClick={()=>setMenuData(menu)}>All</button>
            </div>
        </nav>
        <MenuCard data={menuData}/>
        </>
        
    );
}

export default Restaurant;
