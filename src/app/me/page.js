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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg mb-4"
          />
          <h1 className="text-3xl font-extrabold text-gray-800 mb-1 tracking-tight">{user.name}</h1>
          <p className="text-gray-500 text-sm">{user.Phone}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 rounded-xl p-4 flex flex-col items-center shadow-md border border-blue-200">
            <FaGift className="text-3xl mb-2" />
            <span className="font-bold text-lg">Reward</span>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-700 rounded-xl p-4 flex flex-col items-center shadow-md border border-yellow-200">
            <span className="font-bold text-lg">คะแนนสะสม</span>
            <span className="font-extrabold text-2xl">3,000</span>
          </div>
        </div>
        
        <div 
          className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-xl p-4 flex flex-col items-center shadow-lg cursor-pointer hover:from-green-500 hover:to-green-600 transition-all duration-200 transform hover:scale-105"
          onClick={handleGetPointClick}
        >
          <FaPlusCircle className="text-3xl mb-2" />
          <span className="font-bold text-lg">Get Point</span>
          <span className="text-sm mt-1 opacity-90">เลือกใบเสร็จเพื่อสะสมคะแนน</span>
        </div>
        
        {/* Photo Preview Section */}
        {selectedPhoto && (
          <div className="mt-6 p-4 bg-gray-50/80 rounded-xl border border-gray-200 shadow-inner">
            <h3 className="text-lg font-semibold mb-3 text-center text-gray-800">ใบเสร็จของคุณ</h3>
            <img 
              src={photoUrl} 
              alt="Selected photo"
              className="w-full max-h-64 object-contain rounded-lg mb-4 shadow-md"
            />
            <div className="flex gap-3">
              <button
                onClick={handleSubmitVideo}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2.5 px-4 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              >
                สะสมคะแนน
              </button>
              <button
                onClick={handleCancelVideo}
                className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white py-2.5 px-4 rounded-lg font-semibold shadow-md hover:from-gray-500 hover:to-gray-600 transition-all duration-200"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        )}
        
        {/* Success Message */}
        {showSuccessMessage && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl shadow-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-bold text-green-800">ส่งใบเสร็จเรียบร้อยแล้ว!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>ระบบจะตรวจสอบและคำนวณคะแนนให้ภายใน 24 ชั่วโมง</p>
                  <p className="mt-1 font-medium">ขอบคุณที่ใช้บริการ HugHome</p>
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
      </div>
    </div>
  );
}

export default page;