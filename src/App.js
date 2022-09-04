import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import CustomRow from "./components/Row";
import { generateUniqueID, getIndexWithCopyList } from "./utils";
function App() {
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setRows((state) => [
      ...state,
      {
        id: generateUniqueID(),
        sign: "+",
        disabled: false,
        value: "",
      },
    ]);
  };
  const handleDelete = (row) => {
    const [tempRows, idx] = getIndexWithCopyList(rows, "id", row.id);
    tempRows.splice(idx, 1);
    setRows(tempRows);
  };
  const handleDisable = (row) => {
    const [tempRows, idx] = getIndexWithCopyList(rows, "id", row.id);
    tempRows[idx].disabled = !tempRows[idx].disabled;
    setRows(tempRows);
  };
  const hanelOnInputChange = (event, row) => {
    const { value } = event.target;

    const [tempRows, idx] = getIndexWithCopyList(rows, "id", row.id);
    tempRows[idx].value = Number(value);
    setRows(tempRows);
  };
  const handleDropdownValueChange = (row) => {
    const [tempRows, idx] = getIndexWithCopyList(rows, "id", row.id);
    tempRows[idx].sign = tempRows[idx].sign === "-" ? "+" : "-";
    setRows(tempRows);
  };

  const total =
    rows.length === 0
      ? ""
      : rows.reduce((acc, cur) => {
          if (!cur.value || cur.disabled) return acc;
          if (cur.sign === "-") {
            return acc - cur.value;
          }
          return acc + cur.value;
        }, 0);

  return (
    <div className="App">
      <Button title="Add Row" onClick={handleAddRow} />

      <ul>
        {rows.map((e) => (
          <CustomRow
            key={e.id}
            row={e}
            onDropdownValueChange={handleDropdownValueChange}
            onInputChange={hanelOnInputChange}
            onDelete={handleDelete}
            onDisable={handleDisable}
          />
        ))}
      </ul>

      <p> {total}</p>
    </div>
  );
}

export default App;
