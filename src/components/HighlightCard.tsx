import React from "react";

interface HighlightCardProps {
  imgSrc: string;
  contentText: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  imgSrc,
  contentText,
}) => {
  return (
    <div className="w-1/3 h-auto justify-start flex items-center transition-transform duration-80 ease-in-out hover:scale-105">
      <img
        src={imgSrc}
        alt="Highlight Image"
        className="w-auto h-[80px] pr-4"
      />
      <p className="font-poppins text-lg ml-4 " style={{ color: "#7181A7" }}>
        {contentText}
      </p>
    </div>
  );
};

export default HighlightCard;
