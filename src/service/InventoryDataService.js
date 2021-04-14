import axios from 'axios' 

const INVENTORY_API_URL = 'http://localhost:8080/api'

class InventoryDataService {

    retrieveAllProducts() {
        return axios.get(`${INVENTORY_API_URL}/inventory`);
    }

    deleteProduct(id) {
        return axios.delete(`${INVENTORY_API_URL}/inventory/${id}`);
    }

    createProduct(product) {
        return axios.post(`${INVENTORY_API_URL}/inventory/`,product);
    }

    updateProduct(product) {
        return axios.put(`${INVENTORY_API_URL}/inventory/`,product);
    }
}
export default new InventoryDataService()