import React, { useState, useRef } from 'react';
import { RiVidiconLine, RiEditLine, RiDeleteBinLine, RiImageAddLine } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdMoreTime, MdMonitorHeart } from "react-icons/md";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 'post1',
      title: 'The Importance of Telemedicine',
      content: 'Telemedicine is transforming the way healthcare is delivered. Remote consultations allow patients to access expert care from the comfort of their homes.',
      image: 'https://placehold.co/800x400',
      author: 'Dr. Abdelsattar Ahmed Nasr',
      date: '2023-09-01',
      tags: ['telemedicine', 'healthcare'],
    },
    {
      id: 'post2',
      title: 'Benefits of Home Visits for Cardiac Patients',
      content: 'Home visits provide a convenient way for cardiac patients to receive personalized care without needing to travel.',
      image: 'https://placehold.co/800x400',
      author: 'Dr. Abdelsattar Ahmed Nasr',
      date: '2023-08-15',
      tags: ['cardiology', 'home-care'],
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: '', author: '', tags: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const fileInputRef = useRef();

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sampleImages = [
    'https://placehold.co/800x400?text=Medical+Image+1',
    'https://placehold.co/800x400?text=Medical+Image+2',
    'https://placehold.co/800x400?text=Medical+Image+3',
  ];

  const handleAddPost = () => {
    const post = {
      ...newPost,
      id: `post${blogPosts.length + 1}`,
      date: new Date().toISOString().split('T')[0],
      tags: newPost.tags.split(',').map(tag => tag.trim()),
    };
    setBlogPosts([...blogPosts, post]);
    setNewPost({ title: '', content: '', image: '', author: '', tags: '' });
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setNewPost({ ...post, tags: post.tags.join(', ') });
  };

  const handleUpdatePost = () => {
    setBlogPosts(blogPosts.map(post => post.id === editingPost.id
      ? { ...newPost, date: new Date().toISOString().split('T')[0], tags: newPost.tags.split(',').map(tag => tag.trim()) }
      : post
    ));
    setEditingPost(null);
    setNewPost({ title: '', content: '', image: '', author: '', tags: '' });
  };

  const handleDeletePost = (postId) => {
    setBlogPosts(blogPosts.filter(post => post.id !== postId));
    if (selectedPost.id === postId) {
      setSelectedPost(blogPosts[0]);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost({ ...newPost, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSelect = (imageUrl) => {
    setNewPost({ ...newPost, image: imageUrl });
  };

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedTag === '' || post.tags.includes(selectedTag))
  );

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const handleAdminLogin = async () => {
    // Redirect to the login page
    const isLoggedInToken = localStorage.getItem('isLoggedIn');
    if (isLoggedInToken) {
        setIsLoggedIn(true);
    } else {
        window.location.href = '/login';
    }

    setIsLoggedIn(true);
    setIsAdmin(true); // Assuming admin login grants both admin and logged-in status

  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <header className="p-8 mb-8 text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="mb-4 text-4xl font-bold">Medical Insights Blog</h1>
          <p className="text-xl">Explore the latest in healthcare innovation and patient care</p>
          <div className="flex justify-center mt-6 space-x-6">
            {[RiVidiconLine, GiElectric, MdOutlineHealthAndSafety, MdMoreTime, MdMonitorHeart].map((Icon, index) => (
              <Icon key={index} className="text-3xl" />
            ))}
          </div>
        </header>

        {/* Login/Logout button */}
        <div className="mb-4">
          {isLoggedIn ? (
            <button
              className="px-4 py-2 text-white bg-red-500 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded"
              onClick={handleAdminLogin}
            >
              Admin Login
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {isAdmin && isLoggedIn && (
            <aside className="md:col-span-1">
              <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-2xl font-semibold">{editingPost ? 'Edit Post' : 'Add New Post'}</h2>
                <input
                  className="w-full p-2 mb-4 border rounded"
                  placeholder="Title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                  className="w-full p-2 mb-4 border rounded"
                  placeholder="Content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                />
                <input
                  className="w-full p-2 mb-4 border rounded"
                  placeholder="Author"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                />
                <input
                  className="w-full p-2 mb-4 border rounded"
                  placeholder="Tags (comma-separated)"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                />
                <div className="mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    ref={fileInputRef}
                  />
                  <button
                    className="w-full py-2 mb-2 text-white transition duration-300 bg-green-500 rounded hover:bg-green-600"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <RiImageAddLine className="inline mr-2" />
                    Upload Image
                  </button>
                  <div className="grid grid-cols-3 gap-2">
                    {sampleImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Sample ${index + 1}`}
                        className="object-cover w-full h-20 rounded cursor-pointer"
                        onClick={() => handleImageSelect(img)}
                      />
                    ))}
                  </div>
                </div>
                {newPost.image && (
                  <img src={newPost.image} alt="Selected" className="object-cover w-full h-40 mb-4 rounded" />
                )}
                <button
                  className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
                  onClick={editingPost ? handleUpdatePost : handleAddPost}
                >
                  {editingPost ? 'Update Post' : 'Add Post'}
                </button>
                {editingPost && (
                  <button
                    className="w-full py-2 mt-2 text-gray-800 transition duration-300 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={() => {
                      setEditingPost(null);
                      setNewPost({ title: '', content: '', image: '', author: '', tags: '' });
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </aside>
          )}

          <main className={isAdmin && isLoggedIn ? "md:col-span-2" : "md:col-span-3"}>
            <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
              <input
                className="w-full p-2 border rounded"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="mt-4 space-x-2">
                <button
                  className={`py-2 px-4 rounded ${selectedTag === '' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSelectedTag('')}
                >
                  All
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    className={`py-2 px-4 rounded ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
                  <p className="mb-4 text-gray-600">{post.content}</p>
                  <img src={post.image} alt={post.title} className="object-cover w-full h-40 mb-4 rounded" />
                  <p className="text-sm text-gray-500">Author: {post.author}</p>
                  <p className="text-sm text-gray-500">Date: {post.date}</p>
                  <div className="flex mt-4 space-x-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {isAdmin && isLoggedIn && (
                    <div className="flex mt-4 space-x-4">
                      <button
                        className="flex items-center text-blue-500 hover:text-blue-700"
                        onClick={() => handleEditPost(post)}
                      >
                        <RiEditLine className="mr-1" /> Edit
                      </button>
                      <button
                        className="flex items-center text-red-500 hover:text-red-700"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <RiDeleteBinLine className="mr-1" /> Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Blog;
