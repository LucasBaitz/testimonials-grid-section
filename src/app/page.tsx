import testimonials from "@/app/data.json";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";

interface GridSpan {
  gridColumn: string;
  gridRow: string;
}

const Home: React.FC = () => {
  const elementsGridSpan2: Record<number, GridSpan> = {
    0: { gridColumn: "span 2", gridRow: "span 1" },
    1: { gridColumn: "span 1", gridRow: "span 1" },
    2: { gridColumn: "span 1", gridRow: "span 2" },
    3: { gridColumn: "span 1", gridRow: "span 1" },
    4: { gridColumn: "span 2", gridRow: "span 1" },
  };

  return (
    <main className="flex min-h-screen flex-col items-center align-middle p-5 md:px-72 md:justify-center  bg-[#EDF2F8]">
      <div className="w-full xl:grid flex flex-col gap-5 xl:grid-cols-4">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={t.author.name}
            author={t.author}
            title={t.testimonial}
            backgroundColor={t.backgroundColor}
            textColor={t.textColor}
            story={t.story}
            gridSpan={elementsGridSpan2[i]}
            backgroundImage={t.backgroundImage}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
