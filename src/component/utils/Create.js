import {storage,db} from '../../config/firebase';
import {v4} from 'uuid';
import {collection, addDoc} from 'firebase/firestore';
import { uploadBytesResumable , ref, getDownloadURL  } from 'firebase/storage';

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