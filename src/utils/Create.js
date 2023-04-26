import { storage, db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { v4 } from 'uuid';
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { Display } from './Display';
import { useEffect } from 'react';

export const createHeroSection = async (files, data) => {
    const startupCollection = collection(db, "herosection");
    const { heading, subheading } = data;
    if (files === []) return null;
    const imageRef = ref(storage, `images/${files[0].name + v4()}`);
    try {
        const uploadImage = await uploadBytesResumable(imageRef, files[0]);
        const imageUrl = await getDownloadURL(uploadImage.ref);
        console.log(imageUrl);
        await addDoc(startupCollection, { heading, subheading, image: imageUrl });
        alert("Added successfully to database");
    }
    catch (e) {
        console.error(e);
    }
}

export const createStartup = async (files) => {
    const startupCollection = collection(db, "startup");
    if (files === []) return null;
    const imageRef = ref(storage, `images/${files[0].name + v4()}`);
    try {
        const uploadImage = await uploadBytesResumable(imageRef, files[0]);
        const imageUrl = await getDownloadURL(uploadImage.ref);
        console.log(imageUrl);
        await addDoc(startupCollection, { imageurl: imageUrl });
        alert("Added successfully to database");
    }
    catch (e) {
        console.error(e);
    }
}

export const createAbout = async (data) => {
    console.log("Sending from another file", data);
    const { title, description } = data;
    const aboutCollection = collection(db, "about");
    await addDoc(aboutCollection, { title, description });
    console.log("Added data successfully");
}

export const CreatePartner = async (data, imageURL) => {
    const partnerCollection = collection(db, "partner");
    const { heading, subheading, description } = data;
    await addDoc(partnerCollection, { heading, subheading, description, imageURL });
    alert("Published");
    useEffect(() => {
        Display("partner");
    }, []);
}


export const createCompanies = async (files) => {
    const startupCollection = collection(db, "companies");
    if (files === []) return null;
    const imageRef = await ref(storage, `images/${files[0].name + v4()}`);
    try {
        const uploadImage = await uploadBytesResumable(imageRef, files[0]);
        const imageUrl = await getDownloadURL(uploadImage.ref);
        console.log(imageUrl);
        await addDoc(startupCollection, { image: imageUrl });
        alert("Added successfully to database");
    }
    catch (e) {
        console.error(e);
    }
} 
