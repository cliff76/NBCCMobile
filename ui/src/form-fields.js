import React from "react";

function Generic(props) {
  return (
    <input {...props}/>
  );
}

function Text(props) {

  const placeholder = props.placeholder + (props.required ? '*' : '');
  return (
    <Generic type="text" placeholder={placeholder}/>
  );
}

function RadioButton(props) {
  return (
    <span key={props.key}>
      <Generic type="radio" name={props.name}/> {props.text}
    </span>
  );
}

function Radio(props) {
  return (
    <fieldset>
      <legend>{props.label + (props.required ? '*' : '')}</legend>
      {props.options.split(',').map((each, i) => RadioButton({key:i, name:props.name, text:each}))}
    </fieldset>
  );
}

export {Text, Radio};