//意见
import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

const userStore = createSlice({
    name: "advice",
    //数据状态
    initialState: {
        token: ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

// 解析actionCreate
const { setToken } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer





export { setToken }

export default userReducer
