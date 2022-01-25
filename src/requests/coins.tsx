import axios from "axios";
import { coins, news } from "keys/keys";

export function getCoins() {
  return new Promise((resolve, reject) => {
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
      headers: coins
    };

    axios.request(options).then(function (response) {
      resolve(response.data.data.coins);
    }).catch(function (error) {
      console.error(error);
      reject(error)
    });
  });
};

export function getCoinsFifty() {

  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        tiers: '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: coins
    };

    axios.request(options).then(function (response) {
      resolve(response.data.data.coins);
    }).catch(function (error) {
      console.error(error);
      reject(error)
    });
  })
};

export function getCoin(uuid: string) {
  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coin/' + uuid,
      params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
      headers: coins
    };

    axios.request(options).then(function (response) {
      resolve(response.data.data.coin);
    }).catch(function (error) {
      console.error(error);
      reject(error)
    });
  });
};


export function getOhlc(uuid: string) {
  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/ohlc`,
      params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', interval: 'hour', limit: '24' },
      headers: coins
    };

    axios.request(options).then(function (response) {
      resolve(response.data.data.ohlc);
    }).catch(function (error) {
      console.error(error);
      reject(error);
    });
  });
};

export function getLinks(uuid: string) {
  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
      params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
      headers: coins
    };

    axios.request(options).then(function (response) {
      resolve(response.data.data.coin.links);
    }).catch(function (error) {
      console.error(error);
      reject(error)
    });
  });
};


export function getFiveExchanges(uuid: string) {
  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/exchanges`,
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        limit: '5',
        offset: '0',
        orderBy: '24hVolume',
        orderDirection: 'desc'
      },
      headers: coins
    };

    axios.request(options).then(function (response) {
      resolve(response.data.data.exchanges);
    }).catch(function (error) {
      console.error(error);
      reject(error);
    });
  });
};

export function getFiftyExchanges(uuid: string) {
  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/exchanges`,
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        limit: '50',
        offset: '0',
        orderBy: '24hVolume',
        orderDirection: 'desc'
      },
      headers: coins
    };

    axios.request(options).then(function (response) {
      resolve(response.data.data.exchanges);
    }).catch(function (error) {
      console.error(error);
      reject(error);
    });
  });
};

export function getStats() {
  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/stats',
      params: { referenceCurrencyUuid: 'yhjMzLPhuIDl' },
      headers: coins
    };

    axios.request(options).then(function (response) {
      resolve(response.data.data)
    }).catch(function (error) {
      console.error(error);
      reject(error);
    })
  });
};

export function getNews(value:string) {
  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {
          q: value,
          count: '20',
          sortBy: 'Date',
          mkt: 'en-Us',
          freshness: 'Week',
          originalImg: 'true',
          offset: '0',
          textFormat: 'Raw',
          safeSearch: 'Off'
      },
      headers: news
  };

  axios.request(options).then(function (response) {
      resolve(response.data.value);
  }).catch(function (error) {
      console.error(error);
      reject(error);
  });
  });
};