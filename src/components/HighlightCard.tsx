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
    <div className="w-80 h-auto justify-center flex items-center transition-transform duration-80 ease-in-out hover:scale-105">
      <img src={imgSrc} alt="Highlight Image" className="w-auto h-24" />
      <p className="font-poppins text-lg ml-3" style={{ color: "#7181A7" }}>
        {contentText}
      </p>
    </div>
  );
};

export default HighlightCard;
