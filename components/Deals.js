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
//const htmlContent = <div class="deals"><ul>{list.map(title => <li key={title.storeid}><img src={title.thumb}></img> Game name: {title.title} | Sale Price: {title.salePrice} | Normal Price: {title.normalPrice}</li>)}</ul></div>;
   /*<div class="deals">
    <ul>
      {list.map(title => <li style={{ backgroundColor: theme.backgroundColor,
    color: theme.color }}  key={title.storeid}><img src={title.thumb}></img> Game name: {title.title} | Sale Price: {title.salePrice} | Normal Price: {title.normalPrice}</li>)}
    </ul>

  </div>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {list.map(title => <li key={title.item}>{title.item}</li>)}
    </View>*/
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
  );
}
 
export default Deals;