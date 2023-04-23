import { addDoc, collection } from "@firebase/firestore"
import { db } from "../config/firebase";


const createServices = async (data, url) => {
    const servicesCollection = collection(db, "services");
    const { headingtitle, text } = data;
    console.log(headingtitle, text, url);
    await addDoc(servicesCollection, { heading: headingtitle, imahe: url, subheading: text });
}

export default createServices