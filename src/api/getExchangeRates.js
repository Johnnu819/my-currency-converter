import React, {useEffect, useState} from "react";

const API_KEY = "d50fff617a6c8ee24af0c8ded88fee54"
const api_refresh_time = 3 //hours
const cache_key = "latest_rates"
const cache_timestamp_key = "latest_rates_timestamp"

const GetExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState(null);

    useEffect(() => {
        const getRates = async () => {
            const latest_cache = localStorage.getItem(cache_key)
            const latest_cache_timestamp = localStorage.getItem(cache_timestamp_key)

            const refresh_needed = latest_cache && timestamp && Date.now() - timestamp > api_refresh_time * 60 * 60 * 1000; //1h

            if(!refresh_needed) {
                setExchangeRates(JSON.parse(latest_cache));
                return;
            }

            try {
                const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`);
                const data = await response.json();

                if(data.success && data.rates) {
                    localStorage.setItem(cache_key, JSON.stringify(data.rates));
                    localStorage.setItem(cache_timestamp_key, Date.now().toString());
                    setExchangeRates(data.rates);
                } else {
                    console.error("Invalid data received:", data);
                  }
            } catch (error) {
                  console.error("Fetch failed:", error);
                }
            };
        }
)}
