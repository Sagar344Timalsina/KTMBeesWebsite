import { db, storage } from "../config/firebase";
import { ref, deleteObject } from "firebase/storage"
import { doc, deleteDoc } from "firebase/firestore";
import { notifications } from '@mantine/notifications';

export const deleteStorageImage = (url) => {
  const picRef = ref(storage, url);
  deleteObject(picRef).then(() => console.log("deleted"))
    .catch((error) => {
      console.log(error);
    });
}


export const deleteFirebase = async (id, collection, imgUrl) => {

  try {
    const docRef = doc(db, collection, id);
    await deleteDoc(docRef);
    if (imgUrl !== null) {
      deleteStorageImage(imgUrl);
    }
    notifications.show({
      title: 'Data Deleted',
      autoClose: true,
      style: { backgroundColor: '#C73E1D', color: "white" },
      color: 'red',
      message: ' Data has been deleted!!!!',
    })
    console.log("deleted Data");
  } catch (error) {
    notifications.show({
      title: 'Error!!!',
      autoClose: true,
      style: { backgroundColor: ' #F18F01' },
      color: 'red',
      message: ' Error while deleting data!!!!',
    })
    console.log(error)
  }


}