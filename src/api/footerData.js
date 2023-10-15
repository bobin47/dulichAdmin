import { http } from "../api/http";

export const apiFooterData = {
    getFooterData: (params) => {
        return http.get("datafooter/getdatafooter", { params });
    },
    // createTour: (body) => {
    //     return http.post("tour/newtour", body)
    // },
    // deleteTour: (id) => {
    //     return http.delete(`tour/deletetour/${id}`)
    // },
    updateFooterData: (body) => {
        return http.post(`datafooter/changefooter`, body)
    },
};
