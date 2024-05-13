import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Tabs() {
  const [inputFields, setInputFields] = useState([
    { id: Math.random(), value: "" },
  ]);

  // Function to add a new input field
  const handleAddFields = () => {
    setInputFields([...inputFields, { id: Math.random(), value: "" }]);
  };

  // Function to remove an input field by id
  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    const newValues = values.filter((value) => value.id !== id);
    setInputFields(newValues);
  };

  // Function to update the value of an input field
  const handleValueChange = (id, event) => {
    const newInputFields = [...inputFields];
    const index = newInputFields.findIndex((x) => x.id === id);
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
  };

  var textareas = document.getElementsByTagName("textarea");
  var count = textareas.length;
  for (var i = 0; i < count; i++) {
    textareas[i].onkeydown = function (e) {
      if (e.keyCode === 9 || e.which === 9) {
        e.preventDefault();
        var s = this.selectionStart;
        this.value =
          this.value.substring(0, this.selectionStart) +
          "\t" +
          this.value.substring(this.selectionEnd);
        this.selectionEnd = s + 1;
      }
    };
  }
  return (
    <div class="tabs">
      <Helmet
        bodyAttributes={{
          style: {
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            background: "#efefef",
            color: "#333",
          },
        }}
      />
      <form action="" method="post" className="tab-form">
      <input class="input-tab" name="tabs" type="radio" id="tab-1" />
      <label class="label-tab" for="tab-1">
        APRESENTAÇÃO
      </label>
      <div class="panel">
        <h1>APRESENTAÇÃO</h1>
        <div className="tab-principals">
          <div className="tab-name">
            <p>Nome do Plano</p>
            <textarea
              className="tab-plan-name"
              placeholder="Insira o texto..."
            />
          </div>
          <div>
            <p>Início do Prazo</p>
            <input type="date" className="date" />
          </div>
          <div>
            <p>Término do Prazo</p>
            <input type="date" className="date" />
          </div>
        </div>
        <p>Introdução</p>
        <textarea className="tab-plan" placeholder="Insira o texto..." />
        <div className="container">
          {inputFields.map((inputField) => (
            <div className="input-container" key={inputField.id}>
              <textarea
                placeholder="Insira o subtítulo..."
                className="tab-plan-tittle"
              />
              <textarea
                placeholder="Insira o texto..."
                className="tab-plan"
                value={inputField.value}
                onChange={(e) => handleValueChange(inputField.id, e)}
              />
              <button
                className="delete-btn"
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <span class="material-symbols-outlined delete-icon">
                  DELETE
                </span>
              </button>
            </div>
          ))}
          <button className="add-btn" onClick={handleAddFields}>
            <span class="material-symbols-outlined add-icon">
              ADICIONAR CAMPO
            </span>
          </button>
          
        </div>
      </div>
      <input class="input-tab" name="tabs" type="radio" id="tab-2" />
      <label class="label-tab" for="tab-2">
        NOME DO PLANO
      </label>
      <div class="panel">
        <h1>NOME DO PLANO</h1>
        <p>Nome do Plano</p>
        <textarea className="tab-plan-name" />
        <p>Introdução</p>
        <textarea className="tab-plan" />
      </div>
      <input class="input-tab" name="tabs" type="radio" id="tab-3" />
      <label class="label-tab" for="tab-3">
        AÇÕES
      </label>
      <div class="panel">
        <h1>AÇÕES</h1>
        <p>Nome do Plano</p>
        <textarea className="tab-plan-name" />
        <p>Introdução</p>
        <textarea className="tab-plan" />
      </div>
      <input class="input-tab" name="tabs" type="radio" id="tab-4" />
      <label class="label-tab" for="tab-4">
        BIBLIOTECA
      </label>
      <div class="panel">
        <h1>BIBLIOTECA</h1>
        <p>Nome do Plano</p>
        <textarea className="tab-plan-name" />
        <p>Introdução</p>
        <textarea className="tab-plan" />
      </div>
      <input className="input-tab" name="tabs" type="submit" id="tab-5" value="ADICIONAR PLANO"/>
      <label class="label-tab" for="tab-5">ADICIONAR PLANO</label>
      </form>
    </div>
  );
}

export default Tabs;
