import { defineStore } from 'pinia'
import {ref} from 'vue'
import {getCategoryList} from '@/apis/layout.js'
export const useCategoryStore = defineStore('category', () => {
    const CategoryList = ref([])
    const getCategory= async()=>{
      const res = await getCategoryList()
      CategoryList.value = res.result
    }

  return {
    CategoryList,
    getCategory
   }
})
