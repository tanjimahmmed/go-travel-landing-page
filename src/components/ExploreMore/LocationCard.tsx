import { motion } from "motion/react"
import { Location } from "../../utils/contentTypes"
import { Location as LocationIcon } from "../Icons/Location"
import Star from "../Icons/Star"

interface LocationProps {
    location: Location
}

const LocationCard = ({location}: LocationProps) => {
  return (
    <motion.li
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: 20}}
    transition={{duration: 0.35, ease: "easeInOut"}}
    className="group cursor-pointer">
        <div className="relative mb-8 overflow-hidden rounded-3xl">
            <img className="transform transition-all duration-300 ease-in-out group-hover:scale-103" src={location.img} alt={location.alt} />
            <div className="absolute top-5 right-6 flex items-center gap-x-2 rounded-[.625rem] bg-white/85 px-3 py-1.5 backdrop-blur-3xl">
                <Star className="fill-yellow size-6"/>
                <p className="text-gray-600 tracking-6 text-[1.0625rem] font-semibold">{location.rating}</p>
            </div>
        </div>
        <div className="flex items-end justify-between">
            <div>
                <p className="mb-3.5 text-[1.75rem] font-semibold">{location.title}</p>
                <div className="flex items-center">
                    <LocationIcon className="mr-1.5 size-6"/>
                    <p className="text-grey-700 text-lg">{location.location}</p>
                </div>
            </div>
            <p className="font-rubik text-[1.75rem]">${location.pricePerPerson}/<span className="text-[1.25rem]">Pax</span></p>
        </div>
    </motion.li>
  )
}

export default LocationCard