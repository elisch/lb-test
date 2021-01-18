const axios = require('axios');

const baseUrl = 'https://api2.lagenhetsbyte.se/api/';

const getAds = async (currentSize) => {
  try {
    const response = await axios.post(`${baseUrl}/ad/search`, {
      currentSize: currentSize || 0,
    });

    if (response.status === 200 && response.data.Object) {
      return response.data.Object;
    } else {
      throw 'Kunde inte hämta annonserna';
    }
  } catch (error) {
    console.error(error);
  }
};

export {getAds};
