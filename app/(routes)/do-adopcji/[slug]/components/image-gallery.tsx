"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageGalleryProps {
  images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <>
      <div className="relative mb-4 aspect-3/4 overflow-hidden rounded-lg">
        <Image src={images[selectedImage]} alt="" fill className="object-cover" priority />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                selectedImage === index
                  ? "border-primary-500 scale-95"
                  : "hover:border-primary-300 border-gray-200"
              }`}
            >
              <Image src={image} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </>
  )
}
