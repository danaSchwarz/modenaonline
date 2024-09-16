const validCurrencies = ["€"];

export async function getCurrency(currency) {

  if (!validCurrencies.includes(currency)) {
    console.log(`Invalid currency given: ${currency}. Returning default rate ${1}`)
    return 1;
  }

  const rate = await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Lwg8PkThTw3Vhdwp8kbJKrCQ1FPitV7bWkNhZfEV")
    .then(response => response.json())
    .then(data => {
      if (currency === "€") {
        return data.data.EUR
      } else {
        throw `Invalid currency given: ${currency}.`
      }
    })
    .catch(error => console.log(error))

  return rate;
}