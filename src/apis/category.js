import instance from "@/utils/http"

  export const getTopCategoryAPI = (id)=> instance.get('/category',{ params: { id } })
