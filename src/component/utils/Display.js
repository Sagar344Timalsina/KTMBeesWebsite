import React from 'react'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../../config/firebase'



export const DisplayAbout = async (data) => {
    const aboutCollection = collection(db, data);
    try {
        const aboutData = await getDocs(aboutCollection);
        const filterdData = aboutData.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        }));
        return (filterdData);
    } catch (error) {
        console.error(error);
    }
}

