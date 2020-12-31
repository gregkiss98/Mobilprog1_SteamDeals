import React, { useEffect, useState } from "react";
import { getList } from '../services/list';
import { Button, View, Text, ScrollView, useWindowDimensions } from 'react-native';
import HTML from "react-native-render-html";




function Deals() {

  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList()
      .then(title => {
        if(mounted) {
          setList(title)
        }
      })
    return () => mounted = false;
  }, [])

  const htmlContent = `
    <div class="deals">
    <ul>
      {list.map(title => <li key={title.storeid}><img src={title.thumb}></img> Game name: {title.title} | Sale Price: {title.salePrice} | Normal Price: {title.normalPrice}</li>)}
    </ul>
    </div>
    `;    

    const contentWidth = useWindowDimensions().width;

  return (
    
    <ScrollView style={{ flex: 1 }}>
      <HTML source={{ html: htmlContent }} contentWidth={contentWidth} />
    </ScrollView>
    /*<View>
      {list.map(title => <li key={title.storeid}><img src={title.thumb}></img> <Text> Game name: </Text>{title.title} <Text>| Sale Price: </Text>{title.salePrice} 
      <Text>| Normal Price: </Text>{title.normalPrice}</li>)}
    </View>*/

  );
}
 
export default Deals;