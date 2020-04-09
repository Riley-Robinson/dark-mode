import {useState} from "react";

function useLocalStorage (key, intial) {

        const [storedValue, setStoredValue] = useState(() => {
            const item = window.localStorage.getItem(key);

                return item ? JSON.parse(item) : intial;
        });

        const setValue = value => {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        };

        return [storedValue, setValue]
};

export default useLocalStorage;