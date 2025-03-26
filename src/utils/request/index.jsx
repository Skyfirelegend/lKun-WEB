// 统一中转工具模块函数导出
import axios from "axios";
import { apiPath } from "../api";


export const InformationRequest = async (url, data) => {
    if (!url) {
        return {
            error: true
        };
    }
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (err) {
        console.log("error:", err.response.data)
        return {
            error: true,
            message: err.response.data
        };
    }
}
