import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Order {
    productID: number
}

interface IState {
    orders: Order[]
}

const initialState: IState = {
    orders: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<number>) {
            state.orders.push({productID: action.payload})
        }
    },
})

export const cartActions = {
    addOrder: cartSlice.actions.addOrder
}

export default cartSlice.reducer