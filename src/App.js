// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component.js";
import SearchBox from "./components/search-box/search-box.component.js";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  const onTitleChange = (event) => {
    const title = event.target.value.toLowerCase();
    setTitle(title);
  };

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((oneMonster) => {
      return oneMonster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonster(newFilteredMonster);
  }, [monsters, searchField]);

  return (
    <div className="app">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="monster-search-box"
        placeholder="search monster"
      />
      <br />

      <SearchBox
        onChangeHandler={onTitleChange}
        className="title-search-box"
        placeholder="set up title for the page!!"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         console.log(users);
//         this.setMonsters(users);
//       })
//       .catch((err) => console.log(err));
//   }

//   setMonsters = (users) => {
//     this.setState(
//       () => {
//         return { monsters: users };
//       },
//       () => {
//         console.log("setStateMonsters");
//       }
//     );
//   };

//   setSearchField = (event) => {
//     this.setState(
//       () => {
//         return { searchField: event.target.value.toLowerCase() };
//       },
//       () => {
//         console.log(this.state.searchField);
//       }
//     );
//   };

//   render() {
//     console.log("render");

//     const { monsters, searchField } = this.state;
//     const { setSearchField } = this;

//     const filteredMonster = monsters.filter((oneMonster) => {
//       return oneMonster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="app">
//         <h1 className="app-title">Robot Rolodex</h1>
//         <SearchBox
//           onChangeHandler={setSearchField}
//           className="monster-search-box"
//           placeholder="search monster"
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
