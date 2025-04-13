import instance from "@/utils/http"
//获取结算信息
export const getCheckoutInfoAPI = () => instance.get('/member/order/pre')

//创建订单
export const createOrderAPI = (data) => instance.post('/member/order',data)
