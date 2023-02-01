import axios from "axios";
const API_PATH = "http://localhost:3001/products";

class ApiRequests {

  async getAllItems() {
    try {
      const data = await axios.get(`${API_PATH}`).then((res) =>{
        return res.data
      })
      .catch((err) => {
        console.log(`error at retrieving list of products: `, err)
      });
      return data;
    }
    catch (err) {
        console.log(`error caught at retrieving list of products: `, err)
    }
  }
  async getItemsById(id) {
    try {
        const data = await axios.get(`${API_PATH}?id=${id}`).then((res) =>{
          return res.data
        })
        .catch((err) => {
          console.log(`error at retrieving product by id: `, err)
        });
        return data;
      }
      catch (err) {
          console.log(`error at retrieving product by id: `, err)
      }
  }
}

export default new ApiRequests()
