import React, {useEffect, useState} from "react";

const API_KEY = "d50fff617a6c8ee24af0c8ded88fee54"
const api_refresh_time = 3 //hours
const cache_key = "latest_rates"
const cache_timestamp_key = "latest_rates_timestamp"

const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState(null);

    useEffect(() => {
        const fetchRates = async () => {
            const latest_cache = localStorage.getItem(cache_key)
            const latest_cache_timestamp = localStorage.getItem(cache_timestamp_key)

            const is_fresh = latest_cache && latest_cache_timestamp && Date.now() - latest_cache_timestamp < api_refresh_time * 60 * 60 * 1000; //1h

            if(is_fresh) {
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

            fetchRates();
        }, []);

        return exchangeRates;
    }

export default useExchangeRates