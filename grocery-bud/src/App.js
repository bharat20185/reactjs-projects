import { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import Alert from "./Alert";
import "./App.css";

function App() {
	const [text, setText] = useState("");
	const [items, setItems] = useState([]);
  const [alert, setAlert] = useState({show: false, type: '', msg: ''})
  const [itemId, setItemId] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

  const showAlert = (show = false, type, msg) => {
    setAlert({show, type, msg})
  }

	const handleItem = (e) => {
		e.preventDefault();

    if(isEdit) {
      setItems(
        items.map((item, index) => {
          if(index === itemId) return text
          return item
        })
      );
      showAlert(true, 'primary', 'Value Changed')
    } else {
      const itemText = text;
      setItems((prevState) => [...prevState, text])
      showAlert(true, 'primary', 'Item added into bag!')
    }

		setText("");
    setItemId(null)
    setIsEdit(false)
	};

  const handleClearItem = () => {
    setItems([])
    setText("")
    showAlert(true, 'danger', 'Bag is empty!')
  }

  const handleEdit = (index) => {
    setIsEdit(true)
    setItemId(index)
    setText(items[index]) 
  }

  const handleRemove = (index) => {
    setItems(items.filter((item, itemIndex) => itemIndex !== index))
    setText("");
    setIsEdit(false);
    setItemId(null);
    showAlert(true, 'danger', 'Item Removed!')
  }

	return (
		<div className="container mt-5" style={{color: "#dc3545"}}>
			<h2 className="text-align">Grocery Bud</h2>
      <hr />
      {alert.show && <Alert type={alert.type} msg={alert.msg} onRemoveAlert={showAlert} />}
			<form onSubmit={handleItem}>
				<div className="row mt-4">
					<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<input
							type="text"
							className="form-control"
							placeholder="eg. bring a milk"
							value={text}
							onChange={handleTextChange}
							style={{ backgroundColor: "rgb(219 208 208)" }}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12">
						<button className="btn btn-danger" onClick={handleItem}>
							{isEdit ? 'Edit' : 'Add' }
						</button>
					</div>
				</div>
			</form>
			<div className="mt-5">
        {items.length === 0 && <h4>Bag is empty!</h4>}
        {items.length > 0 && (
          <>
            <ul className="list-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              {
                items.map((item, index) => (
                  <li key={index} className="list-group-item" style={{ backgroundColor: "rgb(219 208 208)", textTransform: "capitalize" }}>
                    <div>{index+1}. {item}</div>
                    <div className="ms-3 mt-2">
                      <FaEdit style={{color: '#dc3545', cursor: 'pointer'}} onClick={() => handleEdit(index)} /> <FaTrash onClick={() => handleRemove(index)} style={{cursor: 'pointer'}} />
                    </div>
                  </li>
                ))
              }
            </ul>
            <div className="mt-3 text-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <button type="button" className="btn" onClick={handleClearItem}>Clear Items</button>
            </div>
          </>
        )}
      </div>
		</div>
	);
}

export default App;
