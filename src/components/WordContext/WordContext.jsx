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
        const response = await fetch(
          "http://itgirlschool.justmakeit.ru/api/words"
        );
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        const data = await response.json();
        setWords(data);
      } catch (err) {
        setError("Не удалось загрузить данные");
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  const addWord = async (newWord) => {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newWord),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при добавлении слова");
      }

      const addedWord = await response.json();
      setWords((prevWords) => [...prevWords, addedWord]);
    } catch (err) {
      setError("Не удалось добавить слово");
    }
  };

  const deleteWord = async (wordId) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${wordId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при удалении слова");
      }

      setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));
    } catch (err) {
      setError("Не удалось удалить слово");
    }
  };

  const updateWord = async (updatedWord) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedWord),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при обновлении слова");
      }

      const updatedData = await response.json();
      setWords((prevWords) =>
        prevWords.map((word) =>
          word.id === updatedData.id ? updatedData : word
        )
      );
    } catch (err) {
      setError("Не удалось обновить слово");
    }
  };

  return (
    <WordContext.Provider
      value={{
        words,
        loading,
        error,
        addWord,
        deleteWord,
        updateWord,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordContext, WordProvider };
