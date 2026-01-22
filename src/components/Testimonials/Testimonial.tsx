import { type Testimonial } from "../../utils/contentTypes";


interface TestimonialProps {
    testimonial: Testimonial;
}

const Testimonial = ({testimonial}: TestimonialProps) => {
  return (
    <li className="relative ml-24 flex rounded-3xl bg-white py-14 pt-14 pr-12 pl-42 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.05)]">
        <div className="after:bg-primary-700 absolute left-0 -translate-x-[50%] size-47.5 overflow-hidden after:absolute after:right-0 after:bottom-0 after:-z-1 after:block after:size-45 after:rounded-full">
            <img className="bg-grey-300 top-0 left-0 z-5 size-45 rounded-full" src={testimonial.img} alt={testimonial.alt} />
        </div>
        <div className="flex flex-col justify-between gap-y-14">
            <p className="text-base/9 font-light">{testimonial.description}</p>
            <p className="font-medium">{testimonial.name} / <span className="font-light">{testimonial.vacation}</span></p>
        </div>
    </li>
  )
}

export default Testimonial