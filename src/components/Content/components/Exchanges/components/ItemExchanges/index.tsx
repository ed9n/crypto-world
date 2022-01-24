import React from "react";



const ItemExchanges: React.FC<{
    iconUrl: string,
    name: string,
    rank: number,
    recommended: boolean,
    uuid: string,
    volume: string
}> = ({ iconUrl, name, rank, recommended, uuid, volume}) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>EXCHANGES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ItemExchanges;