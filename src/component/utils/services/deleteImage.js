import { deleteObject, getStorage, ref } from "firebase/storage";

export const deleteImage = async (image)=>{
    if(image!=null){
        const storage = getStorage();
        const imageRef = ref(storage , image);
        await deleteObject(imageRef);
    }
}