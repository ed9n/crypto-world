import axios from "axios";

export function getCoins (){
    return new Promise( (resolve, reject) => {
        const options: any = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              tiers: '1',
              orderBy: 'marketCap',
              orderDirection: 'desc',
              limit: '10',
              offset: '0'
            },
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
            }
          };

        axios.request(options).then(function (response) {
            resolve(response.data.data.coins);
        }).catch(function (error) {
            console.error(error);
            reject(error)
        });
    })
}
