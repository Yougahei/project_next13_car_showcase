import Image from "next/image";
import {Fragment, useState} from "react";
import {Combobox, Transition} from "@headlessui/react";

import {manufacturers} from "@constants";
import {SearchManuFacturerProps} from "@types";

import {Check, ChevronsUpDown} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Input} from "./ui/input";

const SearchManufacturer = ({manufacturer, setManuFacturer}: SearchManuFacturerProps) => {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false)
    // const [value, setValue] = useState("")

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );

    return (
        <div className='flex-1 max-sm:w-full flex justify-start items-center'>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant={null}
                        role="combobox"
                        aria-expanded={open}
                        className='absolute top-[4px] -left-2 z-10'
                    >
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </Button>
                </PopoverTrigger>
                <Input
                    className='w-full h-[48px] p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm pl-12'
                    onChange={(event) => {
                        setQuery(event.target.value)
                    }}
                    onFocus={() => {
                        setOpen(true);
                    }} // 当输入框获得焦点时，打开弹窗
                    value={query}
                />
                <PopoverContent className={"ml-20"} sideOffset={4}>
                    <Command>
                        <CommandList>
                            <CommandGroup>
                                {filteredManufacturers.map((item) => (
                                    <CommandItem
                                        key={item}
                                        value={item}
                                        onSelect={(currentValue) => {
                                            setQuery(currentValue);
                                            setManuFacturer(currentValue.toLowerCase());
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                item === query ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {item}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {/*<Combobox value={manufacturer} onChange={setManuFacturer}>*/}
            {/*    <div className='relative w-full'>*/}
            {/*        /!* Button for the combobox. Click on the icon to see the complete dropdown *!/*/}
            {/*        <Combobox.Button className='absolute top-[14px]'>*/}
            {/*            <Image*/}
            {/*                src='/car-logo.svg'*/}
            {/*                width={20}*/}
            {/*                height={20}*/}
            {/*                className='ml-4'*/}
            {/*                alt='car logo'*/}
            {/*            />*/}
            {/*        </Combobox.Button>*/}

            {/*        /!* Input field for searching *!/*/}
            {/*        <Combobox.Input*/}
            {/*            className='w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm'*/}
            {/*            displayValue={(item: string) => item}*/}
            {/*            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes*/}
            {/*            placeholder='Volkswagen...'*/}
            {/*        />*/}

            {/*        /!* Transition for displaying the options *!/*/}
            {/*        <Transition*/}
            {/*            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>*/}
            {/*            leave='transition ease-in duration-100'*/}
            {/*            leaveFrom='opacity-100'*/}
            {/*            leaveTo='opacity-0'*/}
            {/*            afterLeave={() => setQuery("")} // Reset the search query after the transition completes*/}
            {/*        >*/}
            {/*            <Combobox.Options*/}
            {/*                className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'*/}
            {/*                static*/}
            {/*            >*/}
            {/*                {filteredManufacturers.length === 0 && query !== "" ? (*/}
            {/*                    <Combobox.Option*/}
            {/*                        value={query}*/}
            {/*                        className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'*/}
            {/*                    >*/}
            {/*                        Create "{query}"*/}
            {/*                    </Combobox.Option>*/}
            {/*                ) : (*/}
            {/*                    filteredManufacturers.map((item) => (*/}
            {/*                        <Combobox.Option*/}
            {/*                            key={item}*/}
            {/*                            className={({active}) =>*/}
            {/*                                `relative cursor-default select-none py-2 pl-10 pr-4 ${*/}
            {/*                                    active ? "bg-primary-blue text-white" : "text-gray-900"*/}
            {/*                                }`*/}
            {/*                            }*/}
            {/*                            value={item}*/}
            {/*                        >*/}
            {/*                            {({selected, active}) => (*/}
            {/*                                <>*/}
            {/*            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>*/}
            {/*              {item}*/}
            {/*            </span>*/}

            {/*                                    /!* Show an active blue background color if the option is selected *!/*/}
            {/*                                    {selected ? (*/}
            {/*                                        <span*/}
            {/*                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}*/}
            {/*                                        ></span>*/}
            {/*                                    ) : null}*/}
            {/*                                </>*/}
            {/*                            )}*/}
            {/*                        </Combobox.Option>*/}
            {/*                    ))*/}
            {/*                )}*/}
            {/*            </Combobox.Options>*/}
            {/*        </Transition>*/}
            {/*    </div>*/}
            {/*</Combobox>*/}
        </div>
    );
};

export default SearchManufacturer;
