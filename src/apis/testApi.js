import instance from "@/utils/http";

export const testInstance =()=>  instance.get('home/category/head')

// export function testInstance () {
//   return instance({
//     url: 'home/category/head'
//   })
// }
