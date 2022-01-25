import React, { memo } from "react";
import CryptoCurrencies from "components/Content/components/CryptoCurrencies";
const CryptoCurrenciesPage = () => {
    return(
        <div>
            <CryptoCurrencies/>
        </div>
    )
}

export default memo(CryptoCurrenciesPage);