function fetchSimpsonQuoteJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;

  axios
    .get(url)

    .then(function (response) {
      return response.data[0];
      // response.data is an array with this Simpson API, array of 1 object : so response.data[0]
    })

    .then(function (simpsonQuote) {
      console.log("data decoded from JSON:", simpsonQuote);
      // Build a block of HTML

      const simpsonQuoteHtml = `
        <p><strong>${simpsonQuote.character}</strong></p>
        <img src="${simpsonQuote.image}" />
        <p>Quote : ${simpsonQuote.quote}</p>
      `;

      document.querySelector("#simpsonQuote").innerHTML = simpsonQuoteHtml;
    });
}

fetchSimpsonQuoteJSON();
