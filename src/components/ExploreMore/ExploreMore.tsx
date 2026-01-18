import { locations } from "../../utils/content"
import CaretUp from "../Icons/CaretUp"
import LocationCard from "./LocationCard"

const ExploreMore = () => {
    const renderLocations = locations.slice(0, 6);
  return (
    <section className="px-24 py-26">
        <div className="m-auto max-w-389">
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">Explore More</h2>
                    <p className="tracking-6 text-gray-700 text-[1.75rem] font-light">Let's go on an adventure</p>
                </div>
                <div className="mb-2 flex gap-x-6">
                    <button className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"><CaretUp className="w-6 -rotate-90 fill-white"/></button>
                    <button className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"><CaretUp className="w-6 rotate-90 fill-white"/></button>
                </div>
            </div>
            <ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24">
                {renderLocations.map((location) => (
                    <LocationCard location={location} key={location.key}/>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default ExploreMore