import React from 'react'
import { db, storage } from '../../config/firebase';
import { addDoc, collection } from '@firebase/firestore';
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';


export const createAbout = async (data) => {
    console.log("Sending from another file", data);
    const { title, description } = data;
    const aboutCollection = collection(db, "about");
    await addDoc(aboutCollection, { title, description });
    console.log("Added data successfully");
}
export const createPartner = async (data, files) => {
    const partnerCollection = collection(db, "partner");
    const { heading, subheading, description, image } = data;
    console.log("New data added", data);
    if (!image) return null;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    try {
        const uploadImage = await uploadBytesResumable(imageRef, files);
        const downloadURL = await getDownloadURL(uploadImage.ref);
        await addDoc(partnerCollection, { heading, subheading, description, image: downloadURL });
        alert("Published");
    } catch (error) {
        console.error(error);
    }
}
const Create = (data) => {
    // console.log("From a different file", data);
    return (
        <div>

        </div>
    )
}

export default Create
