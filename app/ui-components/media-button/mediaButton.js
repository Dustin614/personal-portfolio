"use client"

const MediaButton = ({ url, title, icon }) => {
    const handleClick = () => {
        window.location.href = url;
    };

    return (
        <div
            className="w-full h-full flex flex-col justify-around items-center cursor-pointer hover:bg-gray-800 hover:underline"
            onClick={handleClick}
            title={title}
        >
            {icon}
            <div className="font-bold">{title}</div>
        </div>
    );
};

export default MediaButton;