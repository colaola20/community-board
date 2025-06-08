import React from "react";
import '/Users/olha/community-board/src/App.css';
import '/Users/olha/community-board/src/components/menuPage.css';

const sampleMenu = [
  { name: "Taco", price: "$5" },
  { name: "Burrito", price: "$8" },
  { name: "Quesadilla", price: "$7" },
  { name: "Churros", price: "$3" }
];

const MenuPage = ({ eventName }) => {
    return (
        <div className='menuPage'>
        <h1>{eventName} Menu</h1>
        <ul className="menu-list">
        {sampleMenu.map((item, idx) => (
            <li className="menu-item" key={idx}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            </li>
        ))}
        </ul>
        </div>
    )
};
export default MenuPage;