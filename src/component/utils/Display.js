import {db} from '../../config/firebase';
import {collection, getDocs} from 'firebase/firestore';

export const displayComapnies = async () =>{
    
    
    
    
    
    
    const aboutCollection = collection(db, "companies");
        try {
            const aboutData = await getDocs(aboutCollection);
            const filterdData = aboutData.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }));
            return(filterdData);
        } catch (error) {
            console.error(error);
        }
}