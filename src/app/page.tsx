"use client"
import React, { useState } from 'react';
import { Button } from '/components/ui/button';
import { Input } from '/components/ui/input';
import { Search, Bell, ChevronDown, Play, Info, Plus } from 'lucide-react';

export default function NetflixClone() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center justify-between px-4 md:px-16 py-4">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <h1 className="text-red-600 text-2xl md:text-3xl font-bold">NETFLIX</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="hover:text-gray-300 transition-colors">TV Shows</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Movies</a>
              <a href="#" className="hover:text-gray-300 transition-colors">New & Popular</a>
              <a href="#" className="hover:text-gray-300 transition-colors">My List</a>
            </nav>
          </div>

          {/* Right side menu */}
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <Bell className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <div className="relative">
              <div 
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <img 
                  src="undefined/32x32?prompt=Netflix user profile avatar with red background and generic person silhouette&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                  alt="User profile avatar with red background showing generic person silhouette" 
                  className="w-8 h-8 rounded"
                />
                <ChevronDown className="w-4 h-4" />
              </div>
              {isProfileMenuOpen && (
                <div className="absolute right-0 top-12 bg-black border border-gray-800 rounded shadow-lg py-2 w-48">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Manage Profiles</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Account</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Help Center</a>
                  <hr className="border-gray-800 my-2" />
                  <a href="#" className="block px-4 py-2 hover:bg-gray-800">Sign out of Netflix</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <img 
          src="undefined/1920x1080?prompt=Dramatic movie scene with action hero in dark setting with cinematic lighting and intense atmosphere&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
          alt="Featured movie hero banner showing dramatic action scene with dark cinematic lighting" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="relative z-10 px-4 md:px-16 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Stranger Things</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
            terrifying supernatural forces, and one strange little girl.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Play
            </Button>
            <Button variant="secondary" className="bg-gray-600 hover:bg-gray-500 px-8 py-3 text-lg">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="px-4 md:px-16 pb-20">
        {/* Trending Now */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Movie poster for popular action thriller with bold typography and dramatic character portrait&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Action thriller movie poster featuring dramatic character portrait with bold title typography" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Action Hero</h3>
                <p className="text-sm text-gray-400">2024 • Action</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Romantic comedy movie poster with bright colors and happy couple embracing&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Romantic comedy poster showing happy couple embracing with bright cheerful colors and playful design" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Love Actually</h3>
                <p className="text-sm text-gray-400">2024 • Romance</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Science fiction movie poster with futuristic cityscape and glowing neon elements&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Sci-fi movie poster featuring futuristic cityscape with glowing neon elements and high-tech atmosphere" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Future World</h3>
                <p className="text-sm text-gray-400">2024 • Sci-Fi</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Horror movie poster with dark atmosphere and mysterious shadowy figure&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Horror movie poster with dark eerie atmosphere featuring mysterious shadowy figure and ominous lighting" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Midnight Terror</h3>
                <p className="text-sm text-gray-400">2024 • Horror</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Comedy movie poster with colorful design and funny character expressions&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Comedy movie poster with vibrant colorful design showcasing funny character expressions and playful typography" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Laugh Out Loud</h3>
                <p className="text-sm text-gray-400">2024 • Comedy</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Drama movie poster with emotional character close-up and muted color palette&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Drama movie poster featuring emotional character close-up with muted color palette and thoughtful composition" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Life Stories</h3>
                <p className="text-sm text-gray-400">2024 • Drama</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular on Netflix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular on Netflix</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=TV series poster for supernatural thriller with mysterious characters and dark atmosphere&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Supernatural thriller TV series poster with mysterious characters set against dark atmospheric background" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Dark Secrets</h3>
                <p className="text-sm text-gray-400">2024 • Thriller</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Fantasy adventure movie poster with magical elements and epic landscape&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Fantasy adventure poster showcasing magical elements and epic landscape with mystical creatures and heroes" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Magic Realm</h3>
                <p className="text-sm text-gray-400">2024 • Fantasy</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Documentary poster with real-world photography and informative text layout&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Documentary poster featuring real-world photography with informative text layout and educational theme" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">True Stories</h3>
                <p className="text-sm text-gray-400">2024 • Documentary</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Animated movie poster with colorful cartoon characters and family-friendly design&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Animated family movie poster with colorful cartoon characters and bright cheerful family-friendly design" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Family Fun</h3>
                <p className="text-sm text-gray-400">2024 • Animation</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Crime drama series poster with noir style lighting and serious detective character&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Crime drama series poster with noir style lighting featuring serious detective character in shadowy urban setting" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Detective Story</h3>
                <p className="text-sm text-gray-400">2024 • Crime</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Historical drama movie poster with period costumes and classical composition&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Historical drama poster featuring period costumes and classical composition with elegant vintage styling" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Royal Chronicles</h3>
                <p className="text-sm text-gray-400">2024 • History</p>
              </div>
            </div>
          </div>
        </section>

        {/* Netflix Originals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Netflix Originals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Netflix original series poster with premium production value and cinematic quality&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Netflix original series poster showcasing premium production value with cinematic quality and professional design" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Crown Jewels</h3>
                <p className="text-sm text-gray-400">2024 • Netflix Original</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Original comedy series poster with unique visual style and bold creative direction&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Original comedy series poster with unique creative visual style and bold artistic direction showcasing humor" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Comedy Central</h3>
                <p className="text-sm text-gray-400">2024 • Netflix Original</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Exclusive drama series poster with award-worthy cinematography and compelling characters&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Exclusive drama series poster featuring award-worthy cinematography with compelling character portraits and dramatic lighting" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Drama Masters</h3>
                <p className="text-sm text-gray-400">2024 • Netflix Original</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Original thriller series poster with suspenseful atmosphere and mystery elements&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Original thriller series poster with suspenseful mysterious atmosphere and dark thriller elements creating tension" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Suspense Zone</h3>
                <p className="text-sm text-gray-400">2024 • Netflix Original</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=International original series poster with global appeal and diverse cast representation&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="International original series poster with global appeal featuring diverse cast representation and multicultural themes" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Global Stories</h3>
                <p className="text-sm text-gray-400">2024 • Netflix Original</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105">
              <img 
                src="undefined/300x450?prompt=Original limited series poster with prestige television quality and artistic merit&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Original limited series poster showcasing prestige television quality with high artistic merit and sophisticated design" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Limited Edition</h3>
                <p className="text-sm text-gray-400">2024 • Netflix Original</p>
              </div>
            </div>
          </div>
        </section>

        {/* My List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My List</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="group cursor-pointer transform transition-transform hover:scale-105 relative">
              <img 
                src="undefined/300x450?prompt=Saved movie poster with bookmark indicator showing user has added to personal list&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Saved movie poster with visual bookmark indicator showing user has added this title to their personal watchlist" 
                className="w-full rounded"
              />
              <div className="absolute top-2 right-2">
                <Plus className="w-6 h-6 bg-black bg-opacity-70 rounded-full p-1" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Saved for Later</h3>
                <p className="text-sm text-gray-400">2024 • In My List</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105 relative">
              <img 
                src="undefined/300x450?prompt=Watchlist movie poster with continue watching indicator and progress bar&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Watchlist movie poster with continue watching indicator and progress bar showing viewing status" 
                className="w-full rounded"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" style={{ width: '60%' }}></div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Continue Watching</h3>
                <p className="text-sm text-gray-400">60% Complete</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105 relative">
              <img 
                src="undefined/300x450?prompt=Personal list movie poster with favorite star rating and user preference indicators&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Personal list movie poster with favorite star rating and user preference indicators showing high rating" 
                className="w-full rounded"
              />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">My Favorite</h3>
                <p className="text-sm text-gray-400">⭐⭐⭐⭐⭐</p>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-transform hover:scale-105 relative">
              <img 
                src="undefined/300x450?prompt=Recently added movie poster with new badge and fresh content indicator&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn" 
                alt="Recently added movie poster with prominent new badge and fresh content indicator highlighting recent addition" 
                className="w-full rounded"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">NEW</div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-90 p-4 rounded-b">
                <h3 className="font-semibold">Recently Added</h3>
                <p className="text-sm text-gray-400">Added Yesterday</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
