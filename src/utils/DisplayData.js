import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase"


const DisplayData = async (coll) => {
    let list = [];
    try {
        const querySnapshot = await getDocs(collection(db, coll));
        querySnapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() })
        })
    } catch (error) {
        console.log(error);
    }
    return list;
}

export default DisplayData;