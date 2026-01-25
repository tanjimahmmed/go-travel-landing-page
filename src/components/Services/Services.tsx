import { services } from "../../utils/content";
import { type Service as IService } from "../../utils/contentTypes";
import Service from "./Service";

const CustomizedPackages: IService = services.at(0)!;
const CulinaryTours: IService = services.at(1)!;
const DestinationExpertise: IService = services.at(2)!;

export default function Services() {
  return (
    <section className="bg-primary-100 max-3xl:py-34 max-3xl:px-20 px-24 py-36 max-2xl:px-14 max-2xl:py-28 max-xl:px-10 max-xl:py-26 max-lg:px-6 max-lg:py-24 max-sm:px-4">
      <ul className="border-grey-500/40 max-3xl:py-23 m-auto flex max-w-389 justify-between border-y-1 py-24 max-2xl:py-20 max-xl:gap-x-10 max-xl:py-16 max-lg:flex-wrap max-lg:justify-center max-lg:gap-y-12 max-lg:border-none max-lg:py-0 max-md:gap-y-16">
        <Service service={CustomizedPackages} />
        <li
          className="bg-grey-500/40 block w-0.25 self-stretch max-lg:hidden"
          aria-label="a grey divider element"
        />
        <Service service={CulinaryTours} />
        <li
          className="bg-grey-500/40 block w-0.25 self-stretch max-lg:hidden"
          aria-label="a grey divider element"
        />
        <Service service={DestinationExpertise} />
      </ul>
    </section>
  );
}
