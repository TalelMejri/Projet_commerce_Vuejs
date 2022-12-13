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

    search_user(search){
      return axios.get('user_made/search/'+search);
    },
    
    delete_user(id){
      return axios.delete('user_made/delete_user/'+id)
    },

    get_product_by_id(id){
      return axios.get('/find_product/'+id);
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

    update_product(id,product){
      console.log(product);
      let data = new FormData();
      data.append("Name_Product",product.Name_Product);
      data.append("color", product.color);
      data.append("type", product.type);
      data.append("file", product.file);
      data.append("prix", product.prix);
      data.append("Quantity", product.Quantity);
      data.append("upload_avatar", product.upload_avatar);
      const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        console.log(data);
      return axios.post('/update_product/'+id,data,config);  
    },

    get_all_product(a,b){
       return axios.get(`/get_all_product?${ a ? "search="+a : ""}&page=${b}`);
    },

    get_all_product_user(){
      return axios.get('/get_all_product_user');
    },

    decremente_quantity(product){
   
      return axios.post('/decremente_quantity/',product);
    },
    get_count_product(){
      return axios.get("/count_product");
    },
    
    delete_product(id){
      return axios.delete("/delete_product/"+id);
    }
}
