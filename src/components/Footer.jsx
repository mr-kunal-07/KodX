

const Footer = () => {
    return (
        <section className="bg-black poppins-semibold text-white lg:px-20 sm:pt-10 sm:px-10 ">
            <div className="max-w-7xl px-10 pt-10 mx-auto flex flex-col lg:flex-row items-center justify-between">

                {/* Left Text Section */}
                <div className="lg:w-1/2 mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                        Let’s Build Your First App!!
                    </h2>
                    <p className="text-gray-300 text-sm mb-8">
                        If you also want to make an APP for your startup then book free consultancy today and let's start your startup together.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <img src="./wp-cta.webp" className="h-12 md:h-13 rounded-xl cursor-pointer shadow-lg" alt="WhatsApp CTA" />
                        <img src="./insta-cta.webp" className="h-12 border-white border-[1.2px] md:h-13 rounded-xl cursor-pointer shadow-lg" alt="Instagram CTA" />
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="lg:w-1/2  justify-center hidden lg:block space-x-4">
                    <img src="/fot.webp" alt="App Screenshot 1" className="" />
                </div>
            </div>
        </section>
    );
};

export default Footer;