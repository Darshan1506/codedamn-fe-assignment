import React from "react";
interface ContentProps {
  content: string;
}
const Card: React.FC<ContentProps> = ({ content }) => {
  return (
    <div className="mb-2 inline-block p-2 items-center gap-2 rounded-lg border border-zink-100 bg-zink-50">
      <p className="text-zink-900 font-semibold font-inter text-bas dark:text-white leading-6">
        {content}
      </p>
    </div>
  );
};

export default Card;
