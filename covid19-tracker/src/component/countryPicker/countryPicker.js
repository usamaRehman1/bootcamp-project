import React, { useEffect, useState } from 'react';
import * as Mat from '@material-ui/core';
import { FetchCountries } from '../../apis/apis';
import './countryPicker.css';

export const CountryPicker = ({handelCountryChange}) =>{

    const [contriesArr , setCountriesArr] = useState([])


    useEffect(async () => {
        let contriesObj = await FetchCountries();
        setCountriesArr(contriesObj.countries)
    }, [])


    return(
        <div className="country_container">
        {
            contriesArr.length ? (
                <Mat.FormControl>
                    <Mat.NativeSelect onChange={(ev) => handelCountryChange(ev.target.value)}>
                        <option value="global">global</option>
                        {
                            contriesArr.map((country, ind) => (
                                <option key={ind} value={country.name}>{country.name}</option>
                            ))
                        }
                    </Mat.NativeSelect>
                </Mat.FormControl>
             ) : (
                ""
             )
         }
     </div>
    );

}