import { useState } from "react";

export default function useDisclosure() {
  return { isOpen, onOpen, onClose }; // Return an object with isOpen, onOpen, and onClose properties
}
