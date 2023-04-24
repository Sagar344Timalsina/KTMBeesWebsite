
import {  storage } from "../config/firebase";
import {ref,deleteObject} from "firebase/storage"

const deleteServicesImage = (url) => {
 const picRef=ref(storage,url);
  deleteObject(picRef).then(()=>console.log("deleted"))
  .catch((error)=>{
    console.log(error);
  });
}

export default deleteServicesImage