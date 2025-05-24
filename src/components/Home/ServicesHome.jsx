// components/ServicesPreview.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
    { title: 'Website Development', description: 'We design and build beautiful, user-friendly websites that work for your business.' },
    { title: 'Mobile App Development', description: 'We create native and cross-platform mobile apps that are fast, secure, and scalable.' },
    { title: 'Account Balance Sheet Converter', description: 'We convert your account balance sheets to XML and help you easily migrate your data.' },
];

const ServicesPreview = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white border-t border-b" style={{ borderColor: '#FFF4EB' }}>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {services.slice(0, 6).map((service, index) => (
                        <div key={index} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={() => navigate('/services')}
                        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                    >
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
