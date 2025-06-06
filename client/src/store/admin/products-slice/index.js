
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState= {
isLoading : false,
productList : []
}

export const addNewProduct = createAsyncThunk('/products/addnewproduct', async (formData) => {
const result = await axios.post('http://localhost:5000/api/admin/products/add', formData, {
    headers : {
        'Content-Type' : 'application/json'
    }
})

return result?.data

})


const AdminProductsSlice = createSlice({
    name: 'adminProducts',
    initialState, reducers : {},
    extraReducers : (builder) => {

    }
})