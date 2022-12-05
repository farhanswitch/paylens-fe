import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const fetchAPI = async ({ url, method, data }) => {
  if(method === 'POST'){
    return await axios.post(url,data,{
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  const responseAxios = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  //NOTE: SKETCH => proses consume API itu proses Asynchronous dan dia mengembalikan Promise, untuk dapat data nya perlu keyword 'await'
  return await responseAxios;
};

export default fetchAPI;