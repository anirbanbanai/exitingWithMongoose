import { baseApi } from "../../api/baseApi";

const saleHApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        
        saleHGet: builder.query({
           query: ()=>({
               url:"/auth/tsaleh",
               method:"GET"
           })
        }),
        
        addSaleH : builder.mutation({
            query: (data)=>({
                url:"/auth/tsaleh",
                method:"POST",
                body: data
            })
        })
   })
})


export const { useAddSaleHMutation,useSaleHGetQuery } = saleHApi;