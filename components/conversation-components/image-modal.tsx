"use client";

import Image from "next/image";
import Modal from "../modal";

interface ImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

const ImageModal = ({ onClose, isOpen, src }: ImageModalProps) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" src={src} fill className="object-cover " />
      </div>
    </Modal>
  );
};

export default ImageModal;
