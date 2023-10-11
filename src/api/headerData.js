import { http } from "../api/http";

export const apiHeaderData = {
    getHeaderData: () => {
        return http.get("sliderheader/getsliderheader");
    },
    // createTour: (body) => {
    //     return http.post("tour/newtour", body)
    // },
    // deleteTour: (id) => {
    //     return http.delete(`tour/deletetour/${id}`)
    // },
    updateHeaderData: (body) => {
        return http.put(`sliderheader/changesliderheader`, body)
    },
};