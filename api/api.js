import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:1488/api/'
})
export const menuAPI = {
    getMenu() {
        return instance.get(`menu`)
            .then(response => {
                return response.data
            })
    }
}