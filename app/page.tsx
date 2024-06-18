import {fetchCars} from "@utils";
import {HomeProps} from "@types";
import Hero from "@components/Hero";
import SearchBar from "@components/Searchbar";
import ShowMore from "@components/ShowMore";
import {fuels, yearsOfProduction} from "@constants";
import CustomFilter from "@components/CustomFilter";
import CarCard from "@components/CarCard";

export default async function Home({searchParams}: HomeProps) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || "",
    });

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className='overflow-hidden'>
            <Hero/>
            <div className='mt-12 padding-x padding-y max-width px-20' id='discover'>
                <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
                    <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                    <p>Explore out cars you might like</p>
                </div>

                <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
                    <SearchBar/>

                    <div className='flex justify-start flex-wrap items-center gap-2'>
                        <CustomFilter title='fuel' options={fuels}/>
                        <CustomFilter title='year' options={yearsOfProduction}/>
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                            {allCars?.map((car) => (
                                <CarCard car={car}/>
                            ))}
                        </div>

                        <ShowMore
                            pageNumber={(searchParams.limit || 10) / 10}
                            isNext={(searchParams.limit || 10) > allCars.length}
                        />
                    </section>
                ) : (
                    <div className='mt-16 flex justify-center items-center flex-col gap-2'>
                        <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}
            </div>
        </main>
    )
}