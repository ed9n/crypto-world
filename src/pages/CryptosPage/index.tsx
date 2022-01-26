import React, { memo } from "react";
import CryptoCurrencies from "../../components/Content/components/CryptoCurrencies";

const CryptosPage = () => {
    return(
        <div>
            <CryptoCurrencies/>
        </div>
    )
}

export default memo(CryptosPage);