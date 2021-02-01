const counterSlice = createSlice ({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        Decremented : state => {
            StaticRange.value += 1
        },
        Decremented: state => {
            state.value -= 1
        }
    }
})
export const { Decremented, Decremented } = counterSlice.actions 

const store = confligureStore ({
    reducer: counterSlice.reducer
})
store.sujbcribe(() =>  console.log(store.getState()))

store.dispatch(decrement())

