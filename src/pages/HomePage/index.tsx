import React from "react";
import CoinTable from "components/Content/components/CoinTable";
import GlobalCryptoStats from "components/Content/components/GlobalCryptoStats";
const HomePage = () => {
    return(
        <div>
            <GlobalCryptoStats/>
            <CoinTable/>
        </div>
    )
}

export default HomePage