import { uploadBytesResumable , ref, getDownloadURL  } from 'firebase/storage';
import {storage} from '../../../config/firebase';
import {v4} from 'uuid';

export const imageUrl = async (files) =>{
    try{
        const imageRef = ref(storage, `images/${files[0].name + v4()}`);
        const uploadImage= await uploadBytesResumable(imageRef , files[0]);
        const imageLoc = await getDownloadURL(uploadImage.ref);
        return imageLoc;
    }catch(err){
        console.log("Image url error" , err);
    }
} 