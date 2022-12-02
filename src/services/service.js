import axios from "axios";

export default{
    
    getCountUser(){
        return axios.get('user_made/count');
    },
    
    get_all(){
        return axios.get('user_made/');
    },

    get_All_users(){
        return axios.get('user_made/get_all_user');
    },

    createUser(user){
        let data = new FormData();
        
        data.append("file",user.file);
        data.append("date_naissance", user.date_naissance);
        data.append("nom", user.name);
        data.append("email", user.email);
        data.append("password", user.password);
        const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          };
        return axios.post('auth/register',data,config);  

    }
    
 
}
