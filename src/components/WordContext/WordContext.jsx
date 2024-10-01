import React, { createContext, useState, useEffect } from "react";

const WordContext = createContext();

const WordProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchWords = async () => {
        setLoading(true);
        try {
          const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
          if (!response.ok) {
            throw new Error('Ошибка при получении данных');
          }
          const data = await response.json();
          setWords(data);
        } catch (err) {
          setError('Не удалось загрузить данные');
        } finally {
          setLoading(false);
        }
      };
  
      fetchWords();
    }, []);

  
    return (
      <WordContext.Provider
        value={{ words, loading, error, //addWord, deleteWord, updateWord 
          }}
      >
        {children}
      </WordContext.Provider>
    );
  };
  
  export { WordContext, WordProvider };