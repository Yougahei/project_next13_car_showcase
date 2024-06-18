import React from 'react';
import CarPage from "@components/CarPage";
import {HomeProps} from "@types";

function Page({searchParams}: HomeProps) {

    return (// @ts-ignore
        <CarPage  searchParams={searchParams}/>
    );
}

export default Page;