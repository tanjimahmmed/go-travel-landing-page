import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Star from "../Icons/Star";

interface StepsProps {
  key: number;
  name: string;
  rating: number;
  img: string;
  className: string;
}

export default function Rating(props: StepsProps) {
  const [count, setCount] = useState<number>(0);

  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const step = 0.1;
    const duration = 1000;
    let incrementInterval = duration / (props.rating / step);

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= props.rating) {
          incrementInterval += 1;
          return props.rating;
        }
        return prev + step;
      });
    }, incrementInterval);
    return () => clearInterval(interval);
  }, [props.rating, inView]);

  return (
    <motion.div
      className={`absolute flex gap-x-2.5 rounded-xl bg-white/85 py-3.5 pr-5 pl-3 drop-shadow-[0_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl max-xl:py-2.5 max-sm:pr-6 max-sm:pl-2 ${props.className}`}
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-grey-300 max-3xl:size-16 flex size-17 items-end justify-center overflow-hidden rounded-full max-2xl:size-14 max-xl:size-13 max-sm:size-10">
        <img
          src={props.img}
          alt="Graphic of person rating photo"
          className="max-3xl:size-14 size-15 max-2xl:size-13 max-xl:size-12 max-sm:size-9"
        />
      </div>
      <div className="max-3xl:gap-y-1.5 flex flex-col gap-y-2 max-2xl:gap-y-1">
        <p className="tracking-6 max-3xl:text-sm font-semibold max-sm:text-xs">
          {props.name}
        </p>
        <div className="flex items-center">
          <Star className="fill-yellow mr-2 size-6 max-sm:mr-1.5 max-sm:size-4" />
          <p className="text-grey-600 max-3xl:text-[.9375rem] text-[1.0625rem] font-semibold max-xl:text-sm max-sm:text-xs">
            {count.toFixed(1)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
