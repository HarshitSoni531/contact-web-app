import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Modal from "./Modal";
import {
  addDoc,
  collection,
  getDocs,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import toast from "react-hot-toast";
import * as Yup from "yup";

const validSchema = Yup.object().shape({
  name: Yup.string().required("Mandatory field"),
  Email: Yup.string().email("Enter valid email").required("Mandatory field"),
});

const AddAndUpdateContacts = ({ onClose, isOpen, isUpdate, contact }) => {
  const AddContact = async (contact) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "contacts"), where("name", "==", contact.name))
      );
      if (!querySnapshot.empty) {
        toast.error("Contact already exists!");
        return;
      }
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact has been added successfully");
      onClose();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (contact, id) => {
    try {
      console.log(isUpdate);
      const updateRef = doc(db, "contacts", id);
      await updateDoc(updateRef, contact);
      toast.success("Contact has been updated successfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={validSchema}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  Email: contact.Email,
                }
              : {
                  name: " ",
                  Email: " ",
                }
          }
          onSubmit={(values) => {
            console.log(values);

            isUpdate ? UpdateContact(values, contact.id) : AddContact(values);
          }}
        >
          <Form>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border rounded-lg p-2" />
              <div className="text-xs text-red-600">
                <ErrorMessage name="name" />
              </div>
              <label htmlFor="Email">Email</label>
              <Field name="Email" className="h-10 border rounded-lg p-2" />
              <div className="text-xs text-red-600">
                <ErrorMessage name="Email" />
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="mr-2 px-4 py-2 bg-lightOrange text-gray-800 rounded-md hover:bg-red-400 scale-110 cursor-pointer focus:outline-none focus:bg-red-400 transition duration-150 ease-in-out"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teAl text-white rounded-md hover:scale-110 cursor-pointer focus:outline-none  focus:bg-brightPurple transition duration-150 ease-in-out"
                >
                  {isUpdate ? "Update" : "Add"} contact
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContacts;
