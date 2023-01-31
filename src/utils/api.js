import axios from "axios";
const API_PATH = "http://localhost:3001/products";

class ApiRequests {

  async getAllItems(id, setter) {
    try {
      const data = await axios.get(`${API_PATH}`);
      return data;
    }
    catch (err) {
        console.log(`error at retrieving list of products: `, err)
    }
  }
  async getItemsById(id) {
    try {
        const data = await axios.get(`${API_PATH}?id=${id}`);
        return data;
      }
      catch (err) {
          console.log(`error at retrieving product by id: `, err)
      }
  }
}

export default new ApiRequests()
