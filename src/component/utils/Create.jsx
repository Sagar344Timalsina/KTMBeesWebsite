import React from 'react'
import { db } from '../../config/firebase';
import { addDoc, collection } from '@firebase/firestore';

export const createAbout = async (data) => {
    console.log("Sending from another file", data);
    const { title, description } = data;
    // database to store about info
    const aboutCollection = collection(db, "about");
    // adding document to the database collection
    await addDoc(aboutCollection, { title, description });
    console.log("Added data successfully");
}

const Create = (data) => {
    // console.log("From a different file", data);
    return (
        <div>

        </div>
    )
}

export default Create
