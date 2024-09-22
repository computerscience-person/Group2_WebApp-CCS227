import React from "react";
interface QAProps {
  question: string;
  answer: string;
}
const HomepageFAQs: React.FC<QAProps> = ({ question, answer }) => {
  return (
    <div className="w-[900px] lg:w-[90%] h-[200px] flex flex-col items-start mb-5">
      <p
        className="font-poppins font-bold text-xl mb-1"
        style={{ color: "#7181A7" }}
      >
        {question}
      </p>
      <p className="font-poppins text-lg" style={{ color: "#7181A7" }}>
        {answer}
      </p>
    </div>
  );
};

export default HomepageFAQs;
