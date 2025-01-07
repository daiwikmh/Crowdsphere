import React, { useState } from 'react';
import { Button } from '../ui/button';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      // Here you would send the image to your server or blockchain
      console.log("Image ready for upload:", image);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Upload Image</h2>

        {/* Image Upload */}
        <div className="mb-4">
          <label
            htmlFor="image-upload"
            className="block text-gray-700 mb-2 font-semibold"
          >
            Choose Image
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mb-4 text-center">
            <img
              src={preview}
              alt="Image Preview"
              className="w-full h-auto rounded-md"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Upload Image
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
