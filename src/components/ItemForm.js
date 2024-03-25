import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newName, setNewName] = useState("")
  const[newCategory, setNewCategory] = useState("Produce")

  function nameChange (e) {
    setNewName(e.target.value)
  }

  function categoryChange(e) {
    setNewCategory(e.target.value)
  }
  
function submitItem(e){
  e.preventDefault
 onItemFormSubmit({
    id: uuid(),
    name: newName,
    category: newCategory
  })
}


  return (
    <form className="NewItem" onSubmit={submitItem}>
      <label>
        Name:
        <input 
          type="text"
          name="name"
          value={newName}
          onChange={nameChange}
        />
        </label>
      <label>   
        Category:
        <select name="category"
                value={newCategory}
                onChange={categoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
