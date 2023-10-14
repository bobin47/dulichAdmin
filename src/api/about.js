import {http} from './http'

const apiAboutUs = {
    getAboutHome: ()=>{
        return http.get("aboutus/getDataAboutUsHome")
    },
    getAboutUsDetail:()=>{
        return http.get("aboutus/getDataAboutUsDetail")
    },
    updateAboutUsHome: (body)=>{
        return http.post("aboutus/update-about-us-home", body)
    },
    updateAboutUsDetail:(body)=>{
        return http.post("aboutus/update-about-us-detail", body)
    }
}

