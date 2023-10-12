
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardDetails from "../CardDetails/CardDetails";

function ResultGallery() {
    const loading = useSelector((store) => store.loading);


    return(
        <>
        {loading ?

        <> </> :

        <CardDetails />

        }
        </>
    )
}

export default ResultGallery;
