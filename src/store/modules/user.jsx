//用户相关

import { createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

const userStore = createSlice({
    name: "user",
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

const fetchLogin = (loginForm) => {
    return () => {
        // 发送异步请求
        const res = await request.post('/', loginForm)
        dispatch(setToken(res.data.token))
    }
}

export { fetchLogin, setToken }

export default userReducer
