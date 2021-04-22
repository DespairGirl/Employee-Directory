import axios from "axios";

export default {
    genEmployees: function(){
        return axios.get("https://randomuser.me/api/?results=200");
    },
};