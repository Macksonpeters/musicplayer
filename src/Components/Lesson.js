import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Lesson = () => {
  const [singleBook, setSingleBook] = useState(null);
  const [count, setCount] = useState(0);
  const [show, setshow] = useState(false);
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = "https://api.github.com/users/QuincyLarson";
  const { data, isLoading, error } = useFetch(url);
  console.log(data, isLoading, error);

  // const FetchAdditionalData = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     console.log(loading);
  //     fetch(`${url}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Process the fetched data
  //         console.log("Fetched data:", data);
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //     setLoading(false);
  //   }, 5000);
  // };

  const books = [
    {
      id: 1,
      title: "How To Be Good",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, est",
    },
    {
      id: 2,
      title: "To Be Good",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, est",
    },
    {
      id: 3,
      title: "One Must Be Good",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, est",
    },
  ];

  const [people, setPeople] = useState(books);

  const newPeople = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return <div></div>;
};

export default Lesson;
