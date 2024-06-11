import React, { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { IoMdSearch, IoIosAddCircle } from "react-icons/io";
import Navbar from "./components/Navbar";
import Reactcard from "./components/Reactcard";

import AddAndUpdateContacts from "./components/AddAndUpdateContacts"; // Corrected component name

function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const snapshot = await getDocs(contactsRef); // Fetch initial data
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);
        return contactLists; // Not necessary unless you're using this return value somewhere
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <div className="flex items-center text-[20px] gap-1 relative mt-4">
          <IoMdSearch className="absolute text-[32px] text-white ml-1" />
          <input
            onChange={filterContacts}
            type="search"
            placeholder="search"
            aria-label="Search"
            className="rounded-lg h-[40px] flex-grow bg-transparent border border-white pl-9 text-white"
          />
          <IoIosAddCircle
            onClick={onOpen}
            className="text-[#fff4d4] hover:transition duration-200 transform hover:scale-140"
            size={40}
          />
        </div>
        <div className="mt-8 flex flex-col gap-3">
          {contacts.map((contact) => (
            <Reactcard
              key={contact.id}
              contact={contact}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          ))}
        </div>
        <AddAndUpdateContacts onClose={onClose} isOpen={isOpen} />
      </div>
    </>
  );
}

export default App;
