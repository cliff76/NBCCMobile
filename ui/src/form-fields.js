import React from "react";

function Generic(props) {
  return (
    <input {...props}/>
  );
}

function Text(props) {

  const placeholder = props.placeholder + (props.required ? '*' : '');
  return (
    <Generic type="text" name={props.name} onChange={props.onChange} placeholder={placeholder}/>
  );
}

function RadioButton(props) {
  return (
    <span key={props.key}>
      <Generic type="radio" onChange={props.onChange} name={props.name} value={props.value}/> {props.text}
    </span>
  );
}

function Radio(props) {
  const fields = props.options.split(',');
  const values = props.values.split(',');
  if(fields.length > values.length) throw 'Invalid Number of values for "' + props.name + '". you specified ' + fields.length + ' options and ' + values.length + ' values!';
  return (
    <fieldset>
      <legend>{props.label + (props.required ? '*' : '')}</legend>
      {fields.map((each, i) => RadioButton({key:i, onChange:props.onChange, value:values[i], name:props.name, text:each}))}
    </fieldset>
  );
}

export {Text, Radio};