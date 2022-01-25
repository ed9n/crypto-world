import React, { memo } from "react";
import CoinNews from "components/Content/components/WorldNews";

const NewsPage = () => {
    return(
        <div>
            <CoinNews/>
        </div>
    )
}

export default memo(NewsPage);