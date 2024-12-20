// firestoreUtils.ts
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";

// Add a new document to Firestore
export const addData = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id; // Return the document ID after it is added
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};

// Get all documents from a collection
export const getData = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("Retrieved documents: ", data);
    return data;
  } catch (e) {
    console.error("Error getting documents: ", e);
    throw e;
  }
};

// Update a document in Firestore
export const updateData = async (collectionName: string, docId: string, newData: any) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, newData, { merge: true }); // Merge new data into the document
    console.log('Document updated');
  } catch (error) {
    console.error('Error updating document: ', error);
    throw error;
  }
};

// Delete a document from Firestore
export const deleteData = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", docId);
  } catch (e) {
    console.error("Error deleting document: ", e);
    throw e;
  }
};
