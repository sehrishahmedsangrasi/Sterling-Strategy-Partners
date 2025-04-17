'use client'; // <== This tells Next.js it's a Client Component

import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../app/firebase'; // adjust the path if needed

const UploadDummyData = () => {
  const uploadData = async () => {
    const usersRef = collection(db, 'users');
    const dummyUsers = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Carol', age: 22 },
    ];

    try {
      for (const user of dummyUsers) {
        await addDoc(usersRef, user);
        console.log(`Uploaded: ${user.name}`);
      }
      alert('Dummy users uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return <button onClick={uploadData} className='bg-red-500'>Upload Dummy Users</button>;
};

export default UploadDummyData;
