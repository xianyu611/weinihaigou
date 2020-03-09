import axios from "axios"

var service = axios.create({
    baseURL:"/api", //所有的请求都会带上api
    "content-type":"applicat/json",//请求的类型
    timeout:5000
})

// 请求拦截
service.interceptors.request.use((config)=>{
    // if(sessionStorage.getItem("token")){
    //     config.headers["token"]=sessionStorage.getItem("token")
    // }
     return config
})

//相应拦截
service.interceptors.response.use((res)=>{
    // console.log(res)
    if(res.status!=200){
        console.log("响应失败")
        return  
    }
    return res.data.result
})

export default service