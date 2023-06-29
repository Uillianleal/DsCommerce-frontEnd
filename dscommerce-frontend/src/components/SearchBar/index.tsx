import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: (Function: any) => void;
};

function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState("");

  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="Nome do produto"
      />
      <button onClick={handleResetClick}>🗙</button>
    </form>
  );
}

export default SearchBar;
