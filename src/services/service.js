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
    },

    createProduct(product){

        let data = new FormData();
        data.append("Name_Product",product.Name_Product);
        data.append("color", product.color);
        data.append("type", product.type);
        data.append("file", product.file);
        data.append("prix", product.prix);
        data.append("Quantity", product.Quantity);
        const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          };
          console.log(data);
        return axios.post('/addProduct',data,config);  
    },

    get_all_product(a,b){
       return axios.get(`/get_all_product?${ a ? "search="+a : ""}&page=${b}`);
    },

    get_count_product(){
      return axios.get("/count_product");
    },
    
    delete_product(id){
      return axios.delete("/delete_product"+id);
    }
}
