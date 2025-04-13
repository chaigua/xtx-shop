import instance from "@/utils/http"
//加入购物车
export const insertCartAPI = ({ skuId, count })=> instance.post('/member/cart',{ skuId, count })

//获取最新的购物车列表
export const getNewCartAPI = ()=> instance.get('/member/cart')

//删除购物车商品
export const delCartAPI = (ids) => instance.delete('/member/cart', { data: { ids } });

//合并购物车
export const mergeCartAPI = (data) => instance.post('/member/cart/merge', data);
