"use client";

import React, { useRef, useState } from "react";
import { FaGift, FaStar, FaPlusCircle, FaExchangeAlt } from "react-icons/fa";

function page() {
  const fileInputRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const user = {
    Phone: "083-xxx-xxxx",
    name: "John Doe",
    avatar: "https://i.pravatar.cc/100?img=5",
  };

  const handleGetPointClick = () => {
    fileInputRef.current?.click();
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if it's a photo file
      if (file.type.startsWith('image/')) {
        console.log('Photo selected:', file.name);
        setSelectedPhoto(file);
        
        // Create photo URL for preview
        const url = URL.createObjectURL(file);
        setPhotoUrl(url);
      } else {
        alert('Please select a photo file');
      }
    }
  };

  const handleSubmitVideo = () => {
    if (selectedPhoto) {
      // Here you can add your photo upload logic
      // For example, upload to a server or cloud storage
      
      // Show success message
      setShowSuccessMessage(true);
      
      // Reset after submission
      setSelectedPhoto(null);
      setPhotoUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 20000);
    }
  };

  const handleCancelVideo = () => {
    setSelectedPhoto(null);
    setPhotoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-28 h-28 rounded-full border-4 border-blue-500 shadow mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-gray-500 mb-2">{user.Phone}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8 ">
        <div className="bg-blue-100 text-blue-700 rounded-lg p-4 flex flex-col items-center shadow">
          <FaGift className="text-3xl mb-2" />
          <span className="font-bold text-lg">Reward</span>
        </div>
        <div className="bg-yellow-100 text-yellow-700 rounded-lg p-4 flex flex-col items-center shadow">
          <span className="font-bold text-lg">คะแนนสะสม</span>
          <span className="font-bold text-2xl">3,000</span>
        </div>
      </div>
      <div 
        className="bg-green-200 text-green-700 mt-10 rounded-lg p-4 flex flex-col items-center shadow cursor-pointer hover:bg-green-300 transition-colors"
        onClick={handleGetPointClick}
      >
        <FaPlusCircle className="text-3xl mb-2" />
        <span className="font-bold text-lg">Get Point</span>
        <span className="text-sm mt-1">เลือกใบเสร็จเพื่อสะสมคะแนน</span>
      </div>
      
      {/* Photo Preview Section */}
      {selectedPhoto && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-center">ใบเสร็จของคุณ</h3>
          <img 
            src={photoUrl} 
            alt="Selected photo"
            className="w-full max-h-64 object-contain rounded-lg mb-4"
          />
          {/* <p className="text-sm text-gray-600 mb-4 text-center">
            File: {selectedPhoto.name}
          </p> */}
          <div className="flex gap-3">
            <button
              onClick={handleSubmitVideo}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              สะสมคะแนน
            </button>
            <button
              onClick={handleCancelVideo}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      )}
      
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">ส่งใบเสร็จเรียบร้อยแล้ว!</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>ระบบจะตรวจสอบและคำนวณคะแนนให้ภายใน 24 ชั่วโมง</p>
                <p className="mt-1">ขอบคุณที่ใช้บริการ HugHome</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hidden file input for photo upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleVideoUpload}
        className="hidden"
      />
      {/* <div className="bg-pink-100 text-pink-700 rounded-lg p-4 flex flex-col items-center shadow">
                    <FaExchangeAlt className="text-3xl mb-2" />
                    <span className="font-bold text-lg">แลกรางวัล</span>
                </div> */}
    </div>
  );
}

export default page;