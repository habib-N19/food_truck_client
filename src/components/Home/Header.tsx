const Header = () => {
    return (
        <div className=" p-2 md:p-10  w-full rounded-lg">
            <div className="flex flex-col md:flex-row mx-4 gap-10 items-center justify-between mb-5">
                <h1 className="text-5xl font-bold w-full ">The Best Food Truck in Atlanta </h1>
                <div className="flex items-center gap-6 flex-col">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore
                    </p>
                    <div>
                        <button className="px-4  py-2 bg-red-500 rounded-xl text-white -->">Get Started Now</button>
                    </div>
                </div>
            </div>
            <div className="video-container">
                <video controls>
                    <source src="your_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Header;
