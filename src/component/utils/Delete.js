import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db } from '../../config/firebase'
import { Display } from './Display';
import { deleteObject, getStorage, ref } from 'firebase/storage';

export const Delete = async (id, tableName, image) => {
    if (image != null) {
        const storage = getStorage();
        const desertRef = ref(storage, image);
        await deleteObject(desertRef);
    }
    const dataDocs = doc(db, tableName, id);
    try {
        await deleteDoc(dataDocs);
        alert("Deleted");
        Display(tableName);
    } catch (error) {
        console.error(error);
    }
}
