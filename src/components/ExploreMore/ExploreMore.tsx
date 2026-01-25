import { useState } from "react"
import CaretUp from "../Icons/CaretUp"
import LocationCard from "./LocationCard"
import { LOCATION_CARD_SHOWN } from "../../utils/constants"
import useQueryLocations from "../../hooks/useQueryLocations"
import Loader from "../Loader"
import Error from "../Error"

const ExploreMore = () => {
    const {locations, error, isLoading} = useQueryLocations();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const totalLocations = locations?.length || 0;
    const renderLocations = locations?.slice(currentIndex, currentIndex + LOCATION_CARD_SHOWN);

    const handleRightClick = () => setCurrentIndex((prevIndex) => prevIndex + 1);
    const handleLeftClick = () => setCurrentIndex((prevIndex) => prevIndex - 1);

  return (
    <section className="px-24 py-26">
        <div className="m-auto max-w-389">
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">Explore More</h2>
                    <p className="tracking-6 text-gray-700 text-[1.75rem] font-light">Let's go on an adventure</p>
                </div>
                <div className="mb-2 flex gap-x-6">
                    <button onClick={handleLeftClick} disabled={currentIndex === 0} aria-label="arrow left" className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"><CaretUp className="w-6 -rotate-90 fill-white"/></button>
                    <button onClick={handleRightClick} disabled={currentIndex >= totalLocations - LOCATION_CARD_SHOWN} aria-label="arrow right" className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"><CaretUp className="w-6 rotate-90 fill-white"/></button>
                </div>
            </div>
            {isLoading && !error && <Loader/>}
            {!isLoading && !error && (<ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24">
                {renderLocations?.map((location) => (
                    <LocationCard location={location} key={location.id}/>
                ))}
            </ul>)}
            {!isLoading && error && (<Error>It looks like something went wrong while loading our travel locations!</Error>)}
        </div>
    </section>
  )
}

export default ExploreMore