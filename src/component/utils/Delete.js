import { deleteDoc , doc } from "firebase/firestore"
import { db } from "../../config/firebase";
import { deleteImage } from "./services/deleteImage";

export const deleteRecord=async (id,database,image)=>{
    await deleteImage(image);
    try{
        const companiesDoc= await doc(db, database , id);
        await deleteDoc(companiesDoc);
    }catch(err){
        console.err(err);
    }
 }