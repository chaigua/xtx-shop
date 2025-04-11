import instance from "@/utils/http"
export const loginAPI = ({account,password})=> instance.post('/login',{account,password})
