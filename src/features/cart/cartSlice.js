import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
  "products/allProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      return data
    } catch (error) {
      console.log("fetch error:", error)
    }
  }
)

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productList: [],
    cartItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex === -1) {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      } else {
        state.cartItems[itemIndex].quantity += 1
      }
    },
    reduceFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex !== -1 && state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1)
      }
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = action.payload
        state.loading = false
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message
        state.loading = false
      })
  },
})

export const { addToCart, reduceFromCart, removeFromCart, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
