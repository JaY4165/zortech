import { cn } from "../utils/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  // eslint-disable-next-line react/prop-types
  const words = text?.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 flex h-[50%] items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-2xl font-bold text-[#333333] text-balance dark:text-white/20  md:text-2xl lg:text-2xl xl:text-2xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 my-2 relative mx-1">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
