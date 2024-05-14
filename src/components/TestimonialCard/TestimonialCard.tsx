"use client";
import React from "react";
import TestimonialAuthor from "../TestimonialAuthor/TestimonialAuthor";

interface GridSpan {
  gridColumn: string;
  gridRow: string;
}

interface TestimonialCard {
  backgroundColor: string;
  backgroundImage?: string;
  textColor: string;
  author: { name: string; image: string };
  title: string;
  story: string;
  gridSpan: GridSpan;
}

const TestimonialCard: React.FC<TestimonialCard> = ({
  backgroundColor,
  backgroundImage,
  textColor,
  author,
  title,
  story,
  gridSpan,
}) => {
  return (
    <div
      className={`rounded-lg ${backgroundColor} p-10 space-y-3 shadow-lg bg-no-repeat`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        ...gridSpan,
        backgroundImage: `url(images/${backgroundImage})`,
        backgroundPosition: "80% 0"
      }}
    >
      <TestimonialAuthor author={author.name} image={author.image} textColor={textColor} />
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-start">{title}</h1>
        <p className="text-gray-300 opacity-60" style={{ color: textColor }}>&ldquo;{story}&ldquo;</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
