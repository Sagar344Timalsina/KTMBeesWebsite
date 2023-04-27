import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/firebase";
import { v4 } from "uuid";

const firebaseImageUpload = async (imgData) => {
   console.log("Inside firebase", imgData);
   if (imgData == null) return;
   const imgRef = ref(storage, `images/${imgData.name + v4()}`)
   try {
      const uploadImage = await uploadBytesResumable(imgRef, imgData);
      const downloadURL = await getDownloadURL(uploadImage.ref);
      console.log("download url", downloadURL)
      return downloadURL;
   }
   catch (error) {
      console.log(error);
   }
}

export default firebaseImageUpload