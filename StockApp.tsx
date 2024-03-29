import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import StockButton from './StockButton';
import {getStockInfo} from './api';

function StockApp(): React.JSX.Element {
  const stockList = [
    {stockName: 'META', stockCode: 'META'},
    {stockName: 'FLC', stockCode: 'FLC'},
    {stockName: 'VIETJET', stockCode: 'VIETJET'},
    {stockName: 'MASSAN', stockCode: 'MASSAN'},
    {stockName: 'VINAMILK', stockCode: 'VINAMILK'},
    {stockName: 'SRC', stockCode: 'SRC'},
    {stockName: 'HSBC', stockCode: 'HSBC'},
    {stockName: 'SAM HOLDING', stockCode: 'SAM HOLDING'},
    {stockName: 'PETROLIMEX', stockCode: 'PETROLIMEX'},
  ];

  const [stockName, setStockName] = useState(stockList[0].stockName);
  const [stockCode, setStockCode] = useState(stockList[0].stockCode);
  const [stockChangePercent, setStockChangePercent] = useState('8.700 (-1.5387%)');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.stockName}>{stockName}</Text>
        <Text style={styles.stockIndex}>{stockCode}</Text>
        <Text style={styles.stockChange}>{stockChangePercent}</Text>
      </View>
      <View style={styles.footer}>
        {stockList.map((stock, index) => (
          <StockButton
            name={stock.stockName}
            key={index}
            onPress={() => {
              setStockName(stock.stockName)
              setStockCode(stock.stockCode)

              getStockInfo(stock.stockCode).then(changePercent => {
                setStockChangePercent(changePercent);
              });
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  stockName: {
    fontSize: 40,
  },
  stockIndex: {
    fontSize: 80,
    fontWeight: '500',
  },
  stockChange: {
    fontSize: 40,
    color: 'red',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default StockApp;
