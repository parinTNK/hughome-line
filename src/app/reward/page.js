"use client";

import React, { useState } from "react";
import { FaGift, FaStar, FaShoppingCart, FaCoffee, FaGamepad, FaTicketAlt, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

function page() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();
  
  const user = {
    points: 3000,
    name: "John Doe"
  };

  const rewards = [
    {
      id: 1,
      title: "Starbucks Coffee",
      description: "กาแฟสตาร์บัคส์ size Grande",
      points: 500,
      category: "food",
      image: "☕",
      available: true
    },
    {
      id: 2,
      title: "McDonald's Big Mac Set",
      description: "ชุดบิ๊กแม็ค พร้อมมันฝรั่งและเครื่องดื่ม",
      points: 800,
      category: "food",
      image: "🍔",
      available: true
    },
    {
      id: 3,
      title: "Cinema Ticket",
      description: "ตั๋วหนัง SF Cinema 1 ใบ",
      points: 1200,
      category: "entertainment",
      image: "🎬",
      available: true
    },
    {
      id: 4,
      title: "Gaming Voucher",
      description: "Steam Wallet 200 บาท",
      points: 2000,
      category: "gaming",
      image: "🎮",
      available: false
    },
    {
      id: 5,
      title: "Shopping Voucher",
      description: "บัตรกำนัล Central 500 บาท",
      points: 4500,
      category: "shopping",
      image: "🛍️",
      available: true
    },
    {
      id: 6,
      title: "Pizza Hut Personal",
      description: "พิซซ่าส่วนตัว Pizza Hut",
      points: 600,
      category: "food",
      image: "🍕",
      available: true
    }
  ];

  const categories = [
    { id: "all", name: "ทั้งหมด", icon: FaGift },
    { id: "food", name: "อาหาร", icon: FaCoffee },
    { id: "shopping", name: "ช้อปปิ้ง", icon: FaShoppingCart },
    { id: "entertainment", name: "บันเทิง", icon: FaTicketAlt },
    { id: "gaming", name: "เกม", icon: FaGamepad }
  ];

  const filteredRewards = selectedCategory === "all" 
    ? rewards 
    : rewards.filter(reward => reward.category === selectedCategory);

  const handleRedeem = (reward) => {
    if (user.points >= reward.points && reward.available) {
      alert(`แลกรางวัล "${reward.title}" สำเร็จ!\nใช้คะแนน ${reward.points} คะแนน\nคะแนนคงเหลือ: ${user.points - reward.points} คะแนน`);
    } else if (!reward.available) {
      alert("รางวัลนี้ไม่มีในสต็อก");
    } else {
      alert("คะแนนไม่เพียงพอ");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-pink-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-2xl shadow-2xl border border-red-100 mb-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => router.back()}
              className="p-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors border border-red-200"
            >
              <FaArrowLeft className="text-red-600" />
            </button>
            <h1 className="text-2xl font-extrabold text-red-700 tracking-tight">รางวัล</h1>
            <div className="w-8"></div>
          </div>
          
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-xl text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-100 font-medium">คะแนนของคุณ</p>
                <p className="text-2xl font-extrabold text-white">{user.points.toLocaleString()}</p>
              </div>
              <FaStar className="text-3xl text-yellow-300" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white/90 p-4 rounded-2xl shadow-2xl border border-gray-200 mb-4">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className="text-sm" />
                    <span className="text-sm">{category.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="space-y-4">
          {filteredRewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-white/90 p-4 rounded-2xl shadow-2xl border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{reward.image}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{reward.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500 text-sm" />
                      <span className="font-bold text-gray-800">{reward.points.toLocaleString()}</span>
                      <span className="text-sm text-gray-600">คะแนน</span>
                    </div>
                    
                    <button
                      onClick={() => handleRedeem(reward)}
                      disabled={!reward.available || user.points < reward.points}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        !reward.available
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : user.points >= reward.points
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {!reward.available ? "หมดแล้ว" : user.points >= reward.points ? "แลกเลย" : "คะแนนไม่พอ"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRewards.length === 0 && (
          <div className="bg-white/90 p-8 rounded-2xl shadow-2xl border border-gray-200 text-center">
            <FaGift className="text-4xl text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">ไม่มีรางวัลในหมวดหมู่นี้</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;