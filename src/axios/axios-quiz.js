import axios from "axios";

export default axios.create({
  baseURL: 'https://react-app-quiz-b1ddd-default-rtdb.firebaseio.com/'
})