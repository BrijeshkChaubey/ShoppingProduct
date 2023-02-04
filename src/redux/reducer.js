import { ADD_QTY, ADD_TOCARTLIST, ADD_TODATA, ADD_TOWISHLIST, REMOVE_FROMCARTLIST, REMOVE_FROMWISHLIST } from "./actionType"


const initialstate = {
    cardata: [],
    AddtoCart: [],
    Datalist:[],
    qty:0

}
export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_TODATA:
            return { ...state, Datalist: [...state.Datalist, action.payload] };
        case ADD_TOWISHLIST:
            return { ...state, cardata: [...state.cardata, action.payload] };
        case ADD_TOCARTLIST:
            return { ...state, AddtoCart: [...state.AddtoCart, action.payload] };
       

        case REMOVE_FROMWISHLIST:
            const arr = [...state.cardata.filter((item) => {
                console.log("item.id    REMOVE_FROMWISHLIST ", item.id, "action.payload", action.payload.id, "Carddata", state.cardata);
                return item.id !== action.payload
            })]
            console.log("Arrr", arr);
            return {
                ...state,
                cardata: arr
            }
        case REMOVE_FROMCARTLIST:
            const arrr = [...state.AddtoCart.filter((item) => {
                console.log("item.id", item.id, "action.payload", action.payload.id, "AddtoCartdata", state.AddtoCart);
                return item.id !== action.payload
            })]
            console.log("Arrrrrr", arrr);
            return {
                ...state,
                AddtoCart: arrr
            }
         case ADD_QTY:
                return { ...state,qty:state.qty+1 };    
        default:
            return state;

    }
}
