import React, { memo } from "react";
import WorldNews from "../../components/Content/components/WorldNews";
const NewsPage = () => {
    return(
        <div>
            <WorldNews/>
        </div>
    )
}

export default memo(NewsPage);