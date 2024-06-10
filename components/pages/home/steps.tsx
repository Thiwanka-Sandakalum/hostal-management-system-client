"use client";
import { Button } from "@/components/ui/button";
import { steps } from "@/data";
import { cn } from "@/lib/utils";
import { Step } from "@/types/steps";
import { FC, useEffect, useRef } from "react";

export const StepsSection: FC = () => {
  const stepsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScrolling = () => {
      if (stepsContainer.current) {
        const children = stepsContainer.current
          .childNodes as NodeListOf<HTMLDivElement>;

        children.forEach((child, index) => {
          if (
            window.innerHeight - child.getBoundingClientRect().top >
            window.innerHeight * (30 / 100)
          ) {
            child.style.backgroundColor = "hsl(141, 79%, 85%)";
            child.style.color = "hsl(142, 72%, 29%)";
          } else {
            child.style.backgroundColor = "hsl(240, 5%, 84%)";
            child.style.color = "hsl(240 3.8% 46.1%)";
          }
        });
      }
    };

    window.addEventListener("scroll", onScrolling);

    return () => {
      window.removeEventListener("scroll", onScrolling);
    };
  }, []);

  return (
    <section className="w-full h-full min-h-screen 3xl:min-h-fit mt-20">
      <header className=" w-full h-fit flex flex-col mb-10 space-y-1 justify-center items-center">
        <h1 className=" text-green-600 text-4xl xl:text-6xl font-bold">
          Sample Text
        </h1>
        <p className=" text-muted-foreground text-xs font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          incidunt.
        </p>
      </header>

      <section
        ref={stepsContainer}
        className=" w-[80%] lg:w-[60%] mx-auto flex flex-col space-y-10"
      >
        {steps.map((step, index) => (
          <StepGuide
            key={`steps-guide- ${index + 1}`}
            className={(index + 1) % 2 !== 0 ? "mr-auto" : "ml-auto"}
            step={step}
          />
        ))}
      </section>

      <div className=" w-[80%] lg:w-[60%] mx-auto mt-10 flex flex-col items-center justify-center space-y-4">
        <p className=" text-center text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          unde ab culpa quia suscipit quasi explicabo harum inventore, minima
          deleniti corporis, sapiente eveniet. Repudiandae fugit, deleniti saepe
          veritatis, cupiditate, quasi veniam dolores alias consectetur earum
          minus.
        </p>

        <Button className=" bg-green-200 text-green-700 rounded-full font-extrabold hover:bg-green-600 hover:text-white">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

const StepGuide: FC<{ step: Step; className: string }> = ({
  step: { step, description },
  className,
}) => {
  return (
    <div
      className={cn(
        " w-[50%] px-10 py-5 flex items-center rounded-full space-x-5 transition-colors duration-500",
        className
      )}
    >
      <p className="flex-1 text-left line-clamp-2">{description}</p>
      <h1 className=" text-5xl font-extrabold">{step}</h1>
    </div>
  );
};
