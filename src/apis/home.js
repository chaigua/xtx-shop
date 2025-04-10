import instance from "@/utils/http"

// export const getBannerAPI=()=> instance.get('/home/banner')
export const getBannerAPI = (distributionSite = 1) => {
  return instance.get('/home/banner', { params: { distributionSite } })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI=()=> instance.get('/home/new')

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const findHotAPI=()=> instance.get('home/hot')


/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI=()=> instance.get('/home/goods')
