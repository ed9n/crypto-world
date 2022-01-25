import React, { memo } from "react";
import Exchanges from "components/Content/components/Exchanges";

const ExchangesPage = () => {
    return(
        <div>
            <Exchanges/>
        </div>
    )
}

export default memo(ExchangesPage);