import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import { Navigate, Outlet } from "react-router-dom";

function HomePage() {
  const [carData, setCarData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/cars");

        if (response.status === 200) {
          const data = response.data;
          setCarData(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch car data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image, imageName) => {
    setSelectedImage(image);
    setSelectedImageName(imageName);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageName("");
  };

  const loggedIn = localStorage.getItem("access_token");

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  if (loggedIn)
    return (
      <div className="container mx-auto mt-8 px-4">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {carData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carData.map((car, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => handleImageClick(car.image, car.imageName)}
                />
                <div className="p-4">
                  <h5 className="text-lg font-bold">{car.model}</h5>

                  <p className="text-sm">
                    <strong>Year:</strong> {car.make_year}
                  </p>
                  <p className="text-sm">
                    <strong>Price:</strong> {car.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
              <div className="flex justify-between items-center p-4 border-b">
                <h5 className="text-xl">{selectedImageName}</h5>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600"
                  onClick={closeModal}
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              <div className="p-4">
                <img
                  src={selectedImage}
                  alt={selectedImageName}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default HomePage;
