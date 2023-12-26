import axios from "axios"

export const getItems = async (url:string)=>{
    const responce = await axios.get(url).catch(function (error){
      errorHandler(error)
    });
    return  responce?.data 
}

export const postItems = async (newItem:any,url:string)=>{
    const responce = await axios.post(url,newItem).catch(function (error){
      errorHandler(error)
    });
    return  responce?.data 
}

export const putItems = async (newItem:any,url:string)=>{
  const responce = await axios.put(url,newItem).catch(function (error){
    errorHandler(error)
  });
  return  responce?.data 
}


const errorHandler = (error:any) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
}