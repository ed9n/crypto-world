import React, { memo } from "react";
import DetailCoin from "components/Content/components/CryptoCurrencies/components/DetailCoin";

const DetailCoinPage= () => {
    return(
        <div>
            <DetailCoin/>
        </div>
    )
}

export default memo(DetailCoinPage);