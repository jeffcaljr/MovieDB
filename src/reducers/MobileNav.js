import {EXPAND, CONTRACT, MENU_ITEM_CHOSEN, contractNav} from "../actions/MobileNav";


const MobileNavReducer = (state = { expanded: false}, action) =>{

    switch(action.type){
        case EXPAND:
            return Object.assign({}, state, {expanded: true})
        case CONTRACT:
            return Object.assign({}, state, {expanded: false})
        case MENU_ITEM_CHOSEN:
            if(state.expanded){
                action.asyncDispatch(contractNav())
            }
            return state;
        default:
            return state
    }
}

export default MobileNavReducer;