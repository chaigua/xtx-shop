import { getTopCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import {ref,onMounted} from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

export const useCategory = ()=>{
  const Route = useRoute()
  const categoryData=ref({})
  const getTopCategory = async(id=Route.params.id)=>{
  const res = await getTopCategoryAPI(id)
  categoryData.value = res.result
  }
  onMounted(()=>{
    getTopCategory()
  })

  onBeforeRouteUpdate((to)=>{
    getTopCategory(to.params.id)
  })

  return {
    categoryData
  }
}
