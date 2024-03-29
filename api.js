export const getStockInfo = async (stockCode) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockCode}&apikey=6S6IQWNDK9C36DOI`,
    );
    const json = await response.json();
    if (json['Global Quote'] && json['Global Quote']['10. change percent'] !== undefined) {
      return json['Global Quote']['10. change percent'];
    } else {
      return "Exceeded the limit!"
    }
  } catch (error) {
    console.error(error);
    return null
  }
};
