import instance from "@/utils/http"

export const getCategoryList=()=> instance.get('/home/category/head')
