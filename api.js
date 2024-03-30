export const getStockInfo = async (stockCode) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockCode}&apikey=S5O28T0LCRPBBZCH`,
    );
    const json = await response.json();
    console.log(json)
    if (json['Global Quote']) {
      if (json['Global Quote'].length = 0) {
        return "Invalid stock code!"
      }
      if (json['Global Quote']['10. change percent'] !== undefined) {
        return json['Global Quote']['10. change percent'];
      }
    } else {
      return "Exceeded the limit!"
    }
  } catch (error) {
    return "Invalid URL!"
  }
};
