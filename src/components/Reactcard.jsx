import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoTrash } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc } from "firebase/firestore";
import AddAndUpdateContacts from "./AddAndUpdateContacts";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Reactcard({ contact, isOpen, onClose, onOpen }) {
  const [isUpdate, setisUpdate] = useState();
  const onUpdate = () => {
    setisUpdate(true);
    onOpen();
    console.log(contact.name);
  };
  const deleteContact = async (id) => {
    try {
      const contactRef = doc(db, "contacts", id); // Use the correct collection reference
      await deleteDoc(contactRef);
      toast.success("Contact has been deleted");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        key={contact.id}
        className="flex rounded-lg items-center bg-lightBlue p-2"
      >
        <BiSolidUserCircle className="text-5xl text-teAl mr-2" />
        <div className="flex flex-col">
          <h2 className="mr-auto font-medium">{contact.name}</h2>
          <p className="font-sm">{contact.Email}</p>
        </div>
        <div className="ml-auto flex items-center">
          <FaEdit
            onClick={onUpdate}
            className="ml-2 text-3xl hover:text-lightOrange scale-110 cursor-pointer"
          />
          <IoTrash
            className="ml-2 text-3xl text-teAl hover:text-lightOrange scale-110 cursor-pointer"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddAndUpdateContacts
        isUpdate={isUpdate}
        isOpen={isOpen}
        onClose={onClose}
        contact={contact}
      />
    </div>
  );
}
