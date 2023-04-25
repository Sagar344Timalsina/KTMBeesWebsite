import {db} from '../../config/firebase';
import {collection, addDoc} from 'firebase/firestore';
import { imageUrl } from './services/imageUrl';


export const createHeroSection = async (files,tableName,data) =>{
        const startupCollection= collection(db , tableName);
        const {heading,subheading}=data;
        if(files===[]) return null;
        try{
            await imageUrl(files).then((imageLoc)=>{
                addDoc(startupCollection , {heading , subheading , image : imageLoc});
                alert("Published");
        })
        }catch(e){
            console.error(e);
        }
    } 