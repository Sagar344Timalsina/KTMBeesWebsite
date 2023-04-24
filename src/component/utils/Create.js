import {storage,db} from '../../config/firebase';
import {v4} from 'uuid';
import {collection, addDoc} from 'firebase/firestore';
import { uploadBytesResumable , ref, getDownloadURL  } from 'firebase/storage';

export const createHeroSection = async (files,data) =>{
        const startupCollection= collection(db , "herosection");
        const {heading,subheading}=data;
        if(files===[]) return null;
        const imageRef = await ref(storage, `images/${files[0].name + v4()}`);
        try{
            const uploadImage= await uploadBytesResumable(imageRef , files[0]);
            const imageUrl = await getDownloadURL(uploadImage.ref);
            console.log(imageUrl);
        await addDoc(startupCollection , {heading , subheading , image : imageUrl});
        alert("Added successfully to database");
    }
    catch(e){
        console.error(e);
    }
} 

export const createStartup = async (files) =>{
        const startupCollection= collection(db , "startup");
       
if(files===[]) return null;
const imageRef = await ref(storage, `images/${files[0].name + v4()}`);
try{
    const uploadImage= await uploadBytesResumable(imageRef , files[0]);
    const imageUrl = await getDownloadURL(uploadImage.ref);
    console.log(imageUrl);
            await addDoc(startupCollection , {imageurl : imageUrl});
            alert("Added successfully to database");
        }
        catch(e){
            console.error(e);
        }
} 

export const createAbout = async (data) => {
    console.log("Sending from another file", data);
    const { title, description } = data;
    // database to store about info
    const aboutCollection = collection(db, "about");
    // adding document to the database collection
    await addDoc(aboutCollection, { title, description });
    console.log("Added data successfully");
}
export const createPartner = async (data, files) => {
    const partnerCollection = collection(db, "partner");
    const { heading, subheading, description, image } = data;
    console.log("New data added", data);
    if (!image) return null;
    const imageRef = ref(storage, `images/${files.name + v4()}`);
    try {
        const uploadImage = await uploadBytesResumable(imageRef, files);
        const downloadURL = await getDownloadURL(uploadImage.ref);
        await addDoc(partnerCollection, { heading, subheading, description, image: downloadURL });
        alert("Published");
    } catch (error) {
        console.error(error);
    }
}
    
    
    export const createCompanies = async (files) =>{
        const startupCollection= collection(db , "companies");
        if(files===[]) return null;
        const imageRef = await ref(storage, `images/${files[0].name + v4()}`);
        try{
            const uploadImage= await uploadBytesResumable(imageRef , files[0]);
            const imageUrl = await getDownloadURL(uploadImage.ref);
            console.log(imageUrl);
            await addDoc(startupCollection , {image : imageUrl});
            alert("Added successfully to database");
        }
        catch(e){
            console.error(e);
        }
    } 
