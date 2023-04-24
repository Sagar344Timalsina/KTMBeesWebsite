// import React, { useState } from 'react'
// import { collection, getDocs } from '@firebase/firestore'
// import { db } from '../../config/firebase'
// import { FaEdit } from 'react-icons/fa';
// import { MdOutlineDeleteOutline } from 'react-icons/md'
// import { Table, Button } from '@mantine/core'


// export const DisplayAbout = async () => {
//     const [display, setDisplay] = useState([]);
//     const aboutCollection = collection(db, "about");
//     try {
//         const aboutData = await getDocs(aboutCollection);
//         const filterdData = aboutData.docs.map((doc) => ({
//             ...doc.data(), id: doc.id
//         }));
//         setDisplay(filterdData);
//     } catch (error) {
//         console.error(error);
//     }
//     return display;


// }

