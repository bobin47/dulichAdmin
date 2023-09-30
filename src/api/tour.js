import {http} from "../api/http";

export const apiCategory = {
  getAllTour: (params) => {
    console.log(params)
    return http.get("tour/getPaginationTour", { params });
  },
  createTour:(body)=>{},
  deleteTour:(id)=>{},
  updateTour:()=>{},
};
