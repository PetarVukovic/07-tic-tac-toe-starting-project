import { useState } from "react";

export const Player = ({ initialName, symbol, isActive, handleNameChange }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [editMode, setEditMode] = useState(false);

  const handleEditing = (symbol, player) => {
    setEditMode((editMode) => !editMode);
    if (editMode) handleNameChange(symbol, player);
  };

  const handlePlayerName = (event) => {
    event.preventDefault();
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (editMode) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerName}
      />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditing(symbol, player)}>
        {btnCaption}
      </button>
    </li>
  );
};
