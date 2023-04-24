import { deleteDoc , doc } from "firebase/firestore"
import { db } from "../../config/firebase";





export const deleteHeroSection=async (id)=>{
    console.log(id);
    const companiesDoc= await doc(db, "herosection" , id);
    await deleteDoc(companiesDoc);
 }