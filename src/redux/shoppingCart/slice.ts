import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface ShoppingCartState {
    loading: boolean;
    error: string | null;
    items: any[]
}
const initialState: ShoppingCartState = {
    loading: true,
    error: null,
    items: []
}

export const getShoppingCart = createAsyncThunk(
    "shoppingCart/getShoppingCart",
    async (jwt: string, thunkAPI) => {
        const { data } = await axios.get(
            `http://123.56.149.216:8080/api/shoppingCart`,
            {
                headers: {
                    Authorization: `bearer ${jwt}`
                }
            }
        );
        return data.shoppingCartItems
    })
export const addShoppingCartItem = createAsyncThunk(
    "shoppingCart/addShoppingCartItem",
    async (paramaters: {
        jwt: string,
        touristRouteId: string
    }, thunkAPI) => {
        const { data } = await axios.post(
            `http://123.56.149.216:8080/api/shoppingCart/items)`,
            {
                touristRouteId: paramaters.touristRouteId
            },
            {
                headers: {
                    Authorization: `bearer ${paramaters.jwt}`
                }
            }
        )
        return data.shoppingCartItems
    })

export const clearShoppingCartItem = createAsyncThunk(
    "shoppingCart/clearShoppingCartItem",
    async (paramaters: {
        jwt: string,
        itemIds: number[]
    }, thunkAPI) => {
        const { data } = await axios.delete(
            `http://123.56.149.216:8080/api/shoppingCart/items/(${paramaters.itemIds.join(',')})`,
            {
                headers: {
                    Authorization: `bearer ${paramaters.jwt}`
                }
            }
        )
    })


export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getShoppingCart.pending.type]: (state) => {
            state.loading = true
        },
        [getShoppingCart.fulfilled.type]: (state, action) => {
            state.loading = false
            state.items = action.payload
            state.error = null
        },
        [getShoppingCart.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [addShoppingCartItem.pending.type]: (state) => {
            state.loading = true
        },
        [addShoppingCartItem.fulfilled.type]: (state, action) => {
            state.loading = false
            state.items = action.payload
            state.error = null
        },
        [addShoppingCartItem.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [clearShoppingCartItem.pending.type]: (state) => {
            state.loading = true
        },
        [clearShoppingCartItem.fulfilled.type]: (state, action) => {
            state.loading = false
            state.items = []
            state.error = null
        },
        [clearShoppingCartItem.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

