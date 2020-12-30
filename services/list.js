export function getList() {
    return fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
      .then(data => data.json())
  }
