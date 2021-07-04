import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface OrderState {
    loading: boolean;
    error: string | null;
    currentOrder: any
}
const initialState: OrderState = {
    loading: true,
    error: null,
    currentOrder: null
}

export const placeOrder = createAsyncThunk(
    "order/placeOrder",
    async (paramaters: {
        jwt: string,
        orderId: string
    }, thunkAPI) => {
        const { data } = await axios.post(
            `http://123.56.149.216:8080/api/orders/${paramaters.orderId}/placeOrder`, null,
            {
                headers: {
                    Authorization: `bearer ${paramaters.jwt}`
                }
            }
        );
        return data
    })

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

    },
    extraReducers: {
        [placeOrder.pending.type]: (state) => {
            state.loading = true
        },
        [placeOrder.fulfilled.type]: (state, action) => {
            state.currentOrder = action.payload
            state.loading = false
            state.error = null
        },
        [placeOrder.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})