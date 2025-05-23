import React, { useState } from 'react';
import { Search } from 'lucide-react'; // optional icon library

const servicesData = {
  Development: [
    { title: "Web", desc: "Build and deploy web applications.", icon: "🌐" },
    { title: "Mobile", desc: "Create mobile apps for iOS and Android.", icon: "📱" },
    { title: "Desktop", desc: "Build desktop applications.", icon: "🖥️" },
  ],
  Marketing: [
    { title: "Campaigns", desc: "Create, send, and track targeted email campaigns.", icon: "📩" },
    { title: "Sign", desc: "Digital signature app for businesses.", icon: "✍️" },
    { title: "SalesIQ", desc: "Live chat app to engage and convert website visitors.", icon: "💬" },
    { title: "Forms", desc: "Build online forms for every business need.", icon: "📝" },
    { title: "Backstage", desc: "End-to-end event management software.", icon: "🎤" },
    { title: "Social", desc: "All-in-one social media management software.", icon: "🌐" },
  ],
};

const Services = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Marketing');
  const services = servicesData[category].filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Sidebar */}
      <aside className="md:sticky top-0 w-full md:w-1/4 p-4 md:p-6 bg-gray-100 border-r overflow-auto h-full">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        <div className="space-y-1">
          {Object.keys(servicesData).map((cat) => (
            <button
              key={cat}
              className={`w-full text-left px-3 py-2 rounded-md transition ${cat === category
                  ? 'bg-blue-500 text-white font-semibold'
                  : 'hover:bg-blue-100 text-gray-700'
                }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* Right Content */}
      <main className="w-full md:w-3/4 p-4 md:p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">{category}</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.length > 0 ? (
            services.map((s, index) => (
              <div
                key={index}
                className="border p-5 rounded-lg bg-white hover:shadow-xl transition-all duration-200"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No results found for "{search}".</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Services;
