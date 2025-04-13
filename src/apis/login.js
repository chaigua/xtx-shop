import instance from "@/utils/http"
export const loginAPI = ({account,password})=> instance.post('/login',{account,password})

//个人中心 猜你喜欢 接口
export const getLikeListAPI = ({ limit = 4 })=> instance.get('/goods/relevant',{params:{ limit }})

