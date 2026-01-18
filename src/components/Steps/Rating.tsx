import Star from "../Icons/Star";
import {motion} from "motion/react";

interface RatingProps {
    name: string;
    rating: number;
    img: string;
    className: string;
}

const Rating = (props: RatingProps) => {
  return (
    <motion.div
    initial = {{opacity: 0, y: 100, scale: 0.95}}
    whileInView={{opacity: 1, y: 0, scale: 1}}
    viewport={{once: true}}
    transition={{duration: 0.5, ease: "easeInOut"}}
    className={`absolute flex gap-x-2.5 rounded-xl bg-white/85 py-3.5 pr-5 pl-3 drop-shadow-[0px_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl ${props.className}`}>
        <div className="bg-gray-300 flex items-end justify-center overflow-hidden rounded-full">
            <img src={props.img} alt="Graphic of person rating photo" className="size-15" />
        </div>
        <div className="flex flex-col gap-y-2">
            <p className="tracking-6 font-semibold">{props.name}</p>
            <div className="flex items-center">
                <Star className="fill-yellow mr-2 size-6"/>
                <p className="text-grey-600 text-[1.0625rem] font-semibold">{props.rating}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Rating