

const Header = () => {
    return (
        <div className="h-[85vh] bg-black">
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