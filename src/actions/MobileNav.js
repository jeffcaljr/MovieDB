export const EXPAND = "EXPAND"
export const CONTRACT = "CONTRACT"
export const MENU_ITEM_CHOSEN = "MENU_ITEM_CHOSEN"


export const expandNav = () => {
    return {
        type: EXPAND
    }
}

export const contractNav = () => {
    return {
        type:CONTRACT
    }
}

export const menuItemChosen = () => {
    return {
        type: MENU_ITEM_CHOSEN
    }
}