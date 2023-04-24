import { deleteDoc , doc } from "firebase/firestore"
import { db } from "../../config/firebase";

export const deleteComapnies=async (id)=>{
    console.log(id);
    const companiesDoc= await doc(db, "companies" , id);
    await deleteDoc(companiesDoc);
    console.log("Hello");
 }