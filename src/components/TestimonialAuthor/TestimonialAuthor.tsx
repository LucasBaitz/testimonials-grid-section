"use client";
import Image from "next/image";
import React from "react";

interface TestimonialAuthorProps {
  image: string;
  author: string;
  textColor: string;
}

const TestimonialAuthor: React.FC<TestimonialAuthorProps> = ({
  author,
  image,
  textColor
}) => {
  return (
    <header className="flex align-middle items-center gap-5">
      <Image
        src={`/images/${image}`}
        alt={`${author}'s picture`}
        width={60}
        height={60}
        className="rounded-full w-10 h-10"
      />
      <div className="flex flex-col">
        <span style={{ color: textColor }}>{author}</span>
        <span className="text-xs opacity-50" style={{ color: textColor }}>Verified Graduate</span>
      </div>
    </header>
  );
};

export default TestimonialAuthor;
