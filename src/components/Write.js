import React, {useState} from 'react';
import app from "../firebase";
import { getDatabase, ref, set, push } from "firebase/database";

export function Write(draft){
    const writeData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, '/'));
        set(newDocRef, draft).then(() => {alert("data saved successfully")}).catch((error) => {alert("error: ", error.message)});
    }
    writeData();

};
