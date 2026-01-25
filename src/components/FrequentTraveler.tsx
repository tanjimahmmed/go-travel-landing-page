import { MouseEvent, useState } from 'react'
import Checkmark from './Icons/Checkmark'
import { useFormAndValidation } from '../hooks/useFromAndValidation';
import { motion, AnimatePresence } from 'motion/react';
import useInsertLead from '../hooks/useInsertLead';
import { FORM_STATE_DURATION } from '../utils/constants';

interface FormState {
    currentState: "ideal" | "pending" | "success" | "error";
    errorMessage: string | null;
}

const buttonStateClass = {
    ideal: "bg-primary-700 opacity-100",
    pending: "bg-primary-700 opacity-50",
    success: "bg-green opacity-100",
    error: "bg-red opacity-100",
}

const FrequentTraveler = () => {
    const [formState, setFormState] = useState<FormState>({
        currentState: "ideal",
        errorMessage: null
    })
    const [isChecked, setIsChecked] = useState<boolean>(false);
    

    const {values, errors, isValid, handleChange, resetForm} = useFormAndValidation({
        fullName: "",
        emailAddress: ""
    });

    const mutation = useInsertLead({
        onSuccess: handleSuccess,
        onError: handleError
    })

    function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if(isChecked && isValid) {
            setFormState({currentState: "pending", errorMessage: null});  
        }
        mutation.mutate({
            createdAt: Date.now(),
            fullName: values.fullName,
            emailAddress: values.emailAddress
        })
    }

    function handleSuccess(){
        resetForm();
        setIsChecked(false);
        setFormState({currentState: "success", errorMessage: null})
        setTimeout(() => setFormState({currentState: "ideal", errorMessage: null}), FORM_STATE_DURATION)
    }

    function handleError(error: Error){
        setFormState({currentState: "error", errorMessage: error.message})
        setTimeout(() => setFormState({currentState: "ideal", errorMessage: null}), FORM_STATE_DURATION)
    }


  return (
    <section className='bg-primary-100 px-24 py-36'>
        <div className='border-y-grey-500/40 m-auto flex max-w-389 items-center justify-between gap-x-28 border-y-1 py-26'>
            <div className='basis-150 text-center'>
                <h3 className='tracking-6 mb-9.5 text-[1.75rem] font-semibold'>Learn About Our Frequent 
                    Traveler Program</h3>
                <p className='text-gray-800 text-base/13.5'>Interested in saving up to $1000 on your next vacation? How about earning travel points that can be converted into rewards like extra nights, free meals, and exclusive offers from resorts around globe?</p>
            </div>
            <div className='bg-grey-500/40 block w-0.25 self-stretch'/>
            <form className='flex basis-150 flex-col'>
                <label className='mb-8'>
                    <p className='tracking-6 mb-3 text-lg/9.5 font-semibold'>Full Name</p>
                    <input required type="text" name='fullName' value={values.fullName} onChange={handleChange} minLength={2} maxLength={50} disabled={formState.currentState !== "ideal"} placeholder='Jane Doe' className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50 ${errors.fullName && "outline-red"}`} />
                    <AnimatePresence>
                    {errors.fullName && <motion.p initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 'auto'}} exit={{opacity: 0, height: 0}} transition={{duration: 0.15}} className='text-red pt-1 pl-0.5 text-sm'>{errors.fullName}</motion.p>}
                    </AnimatePresence>
                </label>
                <label className='mb-12'>
                    <p className='tracking-6 mb-3 text-lg/9.5 font-semibold'>Email</p>
                    <input type="email" name='emailAddress' value={values.emailAddress} onChange={handleChange} minLength={3} maxLength={50} disabled={formState.currentState !== "ideal"} placeholder='jane@gmail.com' className='placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50' />
                    <AnimatePresence>
                    {errors.emailAddress && <motion.p initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 'auto'}} exit={{opacity: 0, height: 0}} transition={{duration: 0.15}} className='text-red pt-1 pl-0.5 text-sm'>{errors.emailAddress}</motion.p>}
                    </AnimatePresence>
                </label>
                <div className='flex flex-wrap items-center justify-between gap-8'>
                    <label className='text-grey-800 flex cursor-pointer items-center gap-x-1.5'>
                        <button className='flex size-5 cursor-pointer items-center justify-center rounded-xs bg-white p-1 disabled:opacity-50' type='button' onClick={() => setIsChecked(!isChecked)} disabled={formState.currentState !== "ideal"}>
                            <Checkmark className={`size-2 transition-all duration-200 ${isChecked ? "visible size-3 opacity-100" : "invisible size-2 opacity-0"}`}/>
                        </button>
                        <p className='text-sm tracking-[.03rem]'>Agree to receive promotional email updates</p>
                    </label>

                    <button className={`enabled:hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed ${buttonStateClass[formState.currentState]}`} onClick={handleSubmit} disabled={formState.currentState !== "ideal"}>
                        {formState.currentState === "ideal" && "Learn More"}
                        {formState.currentState === "pending" && "Submitting..."}
                        {formState.currentState === "success" && "Success!"}
                        {formState.currentState === "error" && "Submission Failed"}
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default FrequentTraveler