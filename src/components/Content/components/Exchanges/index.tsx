import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemExchanges from "./components/ItemExchanges";



const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
            params: {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                limit: '50',
                offset: '0',
                orderBy: '24hVolume',
                orderDirection: 'desc'
            },
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
            }
        };

        axios.request(options).then(function (response) {
            setExchanges(response.data.data.exchanges);
            console.log(response.data.data.exchanges);
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    return (
        // <div>
        //     {exchanges.map(item => (
        //         <ItemExchanges
        //         iconUrl={item.iconUrl}
        //         name={item.name}
        //         rank={item.rank}
        //         recommended={item.recommended}
        //         uuid={item.uuid}
        //         volume={item['24hVolume']}
        //         />
        //     ))}
        // </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>EXCHANGES</th>
                        <th>24H TRADE VOLUME</th>
                        <th>RECOMMENDED</th>
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

export default Exchanges