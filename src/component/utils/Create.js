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