import { addDoc, collection } from "@firebase/firestore"
import { db } from "../config/firebase";
import { notifications } from "@mantine/notifications";
import { deleteStorageImage } from "./Delete";


const createServices = async (data, url, collect) => {
    try {
        const servicesCollection = collection(db, collect);
        const { headingtitle, text } = data;
        console.log(headingtitle, text, url);
        if (url !== null)
            await addDoc(servicesCollection, { heading: headingtitle, image: url, subheading: text });
        else {
            await addDoc(servicesCollection, { heading: headingtitle, subheading: text });

        }
        notifications.show({
            title: 'Create',
            message: 'New Data has been inserted',
            color: 'white',
            style: { backgroundColor: '#85FF7A' },
        })
    } catch (error) {
        deleteStorageImage(url);
        notifications.show({
            title: 'Error',
            message: 'Error while inserting Data ',
            color: 'white',
            style: { backgroundColor: '#F18F01' },
        })
    }
}

export default createServices