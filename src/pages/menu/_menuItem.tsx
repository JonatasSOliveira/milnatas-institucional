import React from 'react'
import { MenuItemTitleContainer } from './_styles'

interface Item {
    name: string,
    price: number,
    ingredients: string[]    
}

interface MenuItemProps {
    menuItem: Item
}

const MenuItem = ({menuItem}: MenuItemProps) => (
    <section>
        <MenuItemTitleContainer>
            <h2>{menuItem.name}</h2>
            <span>R$ {menuItem.price.toFixed(2).replace('.', ',')}</span>
        </MenuItemTitleContainer>
        <ul style={{ fontFamily: "Josefin Sans" }}>
            {menuItem.ingredients.map(ingredient => (
                <li>{ingredient}</li>
            ))}
        </ul>
    </section>
)

export default MenuItem