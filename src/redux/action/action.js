import { ADD_QTY, ADD_TOCARTLIST, ADD_TODATA, ADD_TOWISHLIST, REMOVE_FROMCARTLIST, REMOVE_FROMWISHLIST } from "../actionType";
export const addtowhishlistAction = (wishlist) => {

    return {
        type: ADD_TOWISHLIST,
        payload: wishlist
    }

}
export const removefromwishlistAction = (id) => {

    return {
        type: REMOVE_FROMWISHLIST,
        payload: id
    }
};
export const addtoCartlistAction = (Cartlist) => {

    return {
        type: ADD_TOCARTLIST,
        payload: Cartlist
    }

}
export const removefromCartlistAction = (id) => {

    return {
        type: REMOVE_FROMCARTLIST,
        payload: id
    }
};
export const addtoDataAction = (Cartlist) => {

    return {
        type: ADD_TODATA,
        payload: Cartlist
    }

}
export const addtoQtyAction = () => {

    return {
        type: ADD_QTY,

    }

}



