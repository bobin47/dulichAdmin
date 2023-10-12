import {http} from "../api/http";

export const apiCategory = {
  getAllTour: (params) => {
    if(!params){
      return http.get("tour/getPaginationTour");
    }
    console.log(params)
    return http.get("tour/getPaginationTour", { params });
  },
  createTour:(body)=>{
    return http.post("tour/newtour",body)
  },
  deleteTour:(id)=>{
    return http.delete(`tour/deletetour/${id}`)
  },
  updateTour:(id, body)=>{
    return http.put(`tour/updateTour/${id}`,body)
  },
};
