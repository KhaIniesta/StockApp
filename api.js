export const getStockInfo = async (stockCode) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockCode}&apikey=6S6IQWNDK9C36DOI`,
    );
    const json = await response.json();
    return json['Global Quote']['10. change percent'];
    // return json['Global Quote']['09. change'];
  } catch (error) {
    console.error(error);
  }
};
