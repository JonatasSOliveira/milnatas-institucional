import * as React from "react"
import "normalize.css"
import type { HeadFC, PageProps } from "gatsby"
import DefaultContainer from "../../components/DefaultContainer"
import MenuJSON from "../../../content/menu.json"
import MenuItem from "./_menuItem"
import { MenuItemContainer } from "./_styles"

const MenuPage: React.FC<PageProps> = () => {
    return (
        <DefaultContainer>
            <h1 style={{ fontFamily: "Dancing Script" }}>MilNatas - Cardápio</h1>
            <MenuItemContainer>
                {MenuJSON.map(menuItem => <MenuItem menuItem={menuItem} />)}         
            </MenuItemContainer>
        </DefaultContainer>
    )
}

export default MenuPage

export const Head: HeadFC = () => <title>MilNatas</title>