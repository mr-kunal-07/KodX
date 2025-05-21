const About = () => {
    return (
        <section className="text-center py-16 px-5 bg-white">
            <h2 className="text-black text-3xl md:text-4xl bubblegum-sans-regular font-semibold mb-5">About Us</h2>

            <div className="relative w-full max-w-4xl mx-auto my-10 z-50">
                {/* Laptop base image */}
                <img
                    src="./pc1.webp"
                    alt="Laptop"
                    className="w-full block"
                />
                
            </div>

            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-700">
                Build your own quick commerce app just like "Blinkit & Zepto" Our app is a powerful tool to build your own quick-commerce platform.
            </p>
        </section>
    );
};

export default About;


  