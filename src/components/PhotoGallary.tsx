/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import photo1 from "../assets/Football Image silder.png";

export default function PhotoGallery() {
  const images = [
    {
      id: 1,
      src: photo1,
      alt: "Soccer field at night under floodlights",
    },
    {
      id: 2,
      src: photo1,
      alt: "Players on field from distance",
    },
    { id: 3, src: photo1, alt: "Night game aerial view" },
    { id: 4, src: photo1, alt: "Team celebration" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);

    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: number) => {
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentImageIndex(newIndex);
    }
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (!modalOpen) return;

    switch (e.key) {
      case "ArrowLeft":
        navigateImage(-1);
        break;
      case "ArrowRight":
        navigateImage(1);
        break;
      case "Escape":
        closeModal();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, currentImageIndex]);

  return (
    <div className="max-w-[1360px] w-full mx-auto md:px-4 py-10">
      <div className="flex gap-4">
        <div
          className="flex-grow cursor-pointer rounded-2xl overflow-hidden"
          onClick={() => openModal(0)}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 w-1/3">
          <div
            className="h-1/2 cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => openModal(1)}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="h-1/2 relative cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => openModal(2)}
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">
                +{images.length - 2} photos
              </span>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col">
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={closeModal}
              className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex items-center justify-between w-full px-4 absolute top-1/2 transform -translate-y-1/2">
            <button
              onClick={() => navigateImage(-1)}
              disabled={currentImageIndex === 0}
              className={`p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all ${
                currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => navigateImage(1)}
              disabled={currentImageIndex === images.length - 1}
              className={`p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all ${
                currentImageIndex === images.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="flex-grow flex items-center justify-center p-8">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="pb-6 text-center text-white">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
