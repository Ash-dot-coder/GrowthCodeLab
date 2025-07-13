const fromAmountElement = document.querySelector(".amount");
const convertedAmountElement = document.querySelector(".convertedAmount");
const fromCurrencyElement = document.querySelector(".fromCurrency");
const toCurrencyElement = document.querySelector(".toCurrency");
const resultElement = document.querySelector(".result");
const converterContainer = document.querySelector(".converterContainer");

// Array of countries with currency codes
const countries = [
  { code: "AED", name: "United Arab Emirates Dirham" },
  { code: "AFN", name: "Afghan Afghani" },
  { code: "ALL", name: "Albanian Lek" },
  { code: "AMD", name: "Armenian Dram" },
  { code: "ANG", name: "Netherlands Antillean Guilder" },
  { code: "AOA", name: "Angolan Kwanza" },
  { code: "ARS", name: "Argentine Peso" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "AWG", name: "Aruban Florin" },
  { code: "AZN", name: "Azerbaijani Manat" },
  { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
  { code: "BBD", name: "Barbadian Dollar" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "BGN", name: "Bulgarian Lev" },
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "BIF", name: "Burundian Franc" },
  { code: "BMD", name: "Bermudian Dollar" },
  { code: "BND", name: "Brunei Dollar" },
  { code: "BOB", name: "Bolivian Boliviano" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "BSD", name: "Bahamian Dollar" },
  { code: "BTN", name: "Bhutanese Ngultrum" },
  { code: "BWP", name: "Botswanan Pula" },
  { code: "BYN", name: "Belarusian Ruble" },
  { code: "BZD", name: "Belize Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "CZK", name: "Czech Koruna" },
  { code: "DKK", name: "Danish Krone" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "HUF", name: "Hungarian Forint" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "ILS", name: "Israeli New Shekel" },
  { code: "INR", name: "Indian Rupee" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "KRW", name: "South Korean Won" },
  { code: "KWD", name: "Kuwaiti Dinar" },
  { code: "LKR", name: "Sri Lankan Rupee" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "PLN", name: "Polish Zloty" },
  { code: "QAR", name: "Qatari Rial" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "THB", name: "Thai Baht" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "USD", name: "United States Dollar" },
  { code: "VND", name: "Vietnamese Dong" },
  { code: "ZAR", name: "South African Rand" },
];

// Populate select tags with options
countries.forEach((country) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");

  option1.value = country.code;
  option2.value = country.code;

  option1.textContent = `${country.code} (${country.name})`;
  option2.textContent = `${country.code} (${country.name})`;

  fromCurrencyElement.appendChild(option1);
  toCurrencyElement.appendChild(option2);
});

// Set default currencies
fromCurrencyElement.value = "USD";
toCurrencyElement.value = "INR";

// Fetch exchange rate and calculate conversion
const getExchangeRate = async () => {
  const amount = parseFloat(fromAmountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;

  resultElement.textContent = "Fetching exchange rates...";

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/a95ff7e8e1c66d925b6fe7e7/latest/${fromCurrency}`
    );
    const data = await response.json();

    const conversionRate = data.conversion_rates[toCurrency];

    if (typeof conversionRate === "undefined") {
      resultElement.textContent =
        "Exchange rate data is not available for selected currencies!";
      convertedAmountElement.value = "";
    } else {
      const convertedAmount = (amount * conversionRate).toFixed(2);
      convertedAmountElement.value = convertedAmount;
      resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }
  } catch (error) {
    converterContainer.innerHTML =
      "<h2>Error fetching exchange rates. Please try again later.</h2>";
  }
};

// Event listeners
fromAmountElement.addEventListener("input", getExchangeRate);
fromCurrencyElement.addEventListener("change", getExchangeRate);
toCurrencyElement.addEventListener("change", getExchangeRate);
window.addEventListener("load", getExchangeRate);
