"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageGalleryProps {
  images: string[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (images.length === 0) {
    return <div className="relative mb-4 aspect-3/4 overflow-hidden rounded-lg bg-gray-100" />
  }

  return (
    <div className="flex max-w-125 flex-col">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100 lg:aspect-3/4">
        <Image
          src={images[selectedImage]}
          alt=""
          fill
          sizes="(min-width: 1024px) 352px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2 lg:gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 bg-gray-100 transition-all ${
                selectedImage === index
                  ? "border-primary-500 scale-95"
                  : "hover:border-primary-300 border-gray-200"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 80px, 25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
