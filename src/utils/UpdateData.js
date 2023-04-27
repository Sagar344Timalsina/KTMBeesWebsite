import { doc,getDoc, setDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { notifications } from "@mantine/notifications";


const UpdateData = async(data,id) => {
try {
    console.log(data,id);
    const docRef= doc(db,"startup",id);
    const res=await setDoc(docRef,data,{merge:true});
if(res){
    notifications.show(
        {
            title: 'Data Updated',
            autoClose: true,
            style: { backgroundColor: '#85FF7A', color: "white" },
            color: 'red',
            message: ' Data has been Updated Successfully!!!!',
          }
    )
}
} catch (error) {
    notifications.show({
        title: 'Error',
        message: 'Error while Updating Data ',
        color: 'white',
        style: { backgroundColor: '#F18F01' },
    })
}
}

export const getIndividualData=async(id)=>{
try {
    const docRef= doc(db,"startup",id);
    const res=await getDoc(docRef);
   return(res.data());
} catch (error) {
    console.log(error)
}
}

export default UpdateData