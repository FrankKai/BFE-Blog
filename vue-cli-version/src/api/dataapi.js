import axios from 'axios'

export default {
  getData (callback) {
    
    axios.get('http://localhost:3000').then(res => {
      callback(res.data)
    })
  }
}