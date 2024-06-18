import {Fragment} from "react";
import Image from "next/image";

// import {Dialog, Transition} from "@headlessui/react";
import {CarProps} from "@types";
import {generateCarImageUrl} from "@utils";
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => (
    <>
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-[425px]">
                <div
                    className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>

                    <div className='flex-1 flex flex-col gap-3'>
                        <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                            <Image src={generateCarImageUrl(car)} alt='car model' fill priority
                                   className='object-contain'/>
                        </div>

                        <div className='flex gap-3'>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateCarImageUrl(car, "29")} alt='car model' fill priority
                                       className='object-contain'/>
                            </div>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateCarImageUrl(car, "33")} alt='car model' fill priority
                                       className='object-contain'/>
                            </div>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateCarImageUrl(car, "13")} alt='car model' fill priority
                                       className='object-contain'/>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col gap-2'>
                        <h2 className='font-semibold text-xl capitalize'>
                            {car.make} {car.model}
                        </h2>

                        <div className='mt-3 flex flex-wrap gap-4'>
                            {Object.entries(car).map(([key, value]) => (
                                <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                    <h4 className='text-grey capitalize'>
                                        {key.split("_").join(" ")}
                                    </h4>
                                    <p className='text-black-100 font-semibold'>
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    </>
);

export default CarDetails;
