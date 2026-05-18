import { View, Text } from 'react-native'
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Holdings() {
    const [holdings, setHoldings] = useState([]);
    useEffect(() => {
        const fetchHoldings = async () => {
            const res = await axios.get("http://localhost:4000/api/investors/1/holdings");
            setHoldings(res.data.data);
            // console.log(res);
        }
        fetchHoldings();
    }, []);

  return (
    <View>
      <Text>Holdings</Text>
      {holdings.map((holding, index) => (
        <View key={index}>
          <Text>Stock: {holding?.current_nav}</Text>
          <Text>Stock: {holding?.current_value}</Text>
          <Text>Stock: {holding?.fund_name}</Text>
          <Text>Stock: {holding?.total_units}</Text>
        </View>
      ))}
    </View>
  )
}