import instance from "@/utils/http"
//获取支付信息
export const getPayInfoAPI = (id) => instance.get(`/member/order/${id}`)
