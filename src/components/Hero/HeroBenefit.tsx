import { type HeroBenefit } from '../../utils/contentTypes'

interface HeroBenefitProps {
    benefit: HeroBenefit
}

const HeroBenefit = ({benefit}: HeroBenefitProps) => {
  return (
    <li key={benefit.id} className='flex items-center gap-x-12'>
        <div className='bg-primary-100 shrink-0 items-center flex size-24 justify-center rounded-full'>
            <benefit.Icon className='fill-primary-700'/>
        </div>
        <div>
            <p className='text-gray-600 tracking-6 text-[1.75rem] font-medium whitespace-nowrap'>{benefit.heading}</p>
            <p className='tracking-6 text-gray-600 font-rubik text-base/7.5'>{benefit.description}</p>
        </div>
    </li>
  )
}

export default HeroBenefit