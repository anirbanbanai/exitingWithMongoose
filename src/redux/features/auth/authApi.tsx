import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation({
           query: (userinfo)=>({
               url:"/auth/login",
               method:"POST",
               body: userinfo
           })
        })
   })
});

export const {useLoginMutation} = authApi;