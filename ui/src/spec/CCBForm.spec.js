import CCBForm from "../ccb/forms";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

const util = require("util");
const fs = require("fs");
fs.readFileAsync = util.promisify(fs.readFile);
configure({ adapter: new Adapter() });

describe("CCBForms", () => {
  it("should contain the xml passed via props in its constructor", () => {
    return fs
      .readFileAsync("./src/spec/example-form-detail.xml")
      .then(xmlData => {
        let xml = xmlData.toString();
        const form = new CCBForm({ xml });
        expect(form.xml).toEqual(xml);
      });
  });

  it("should render a form pulling the title from CCB Form data", () => {
    const possibleTitles = [
      "Connect Card Feb",
      "Generic Form",
      "Test Form",
      "March"
    ];
    const randomNumber = Math.floor(Math.random() * possibleTitles.length);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <form>
      <title>${possibleTitles[randomNumber]}</title>
    </form>
    `;
    expect(shallow(<CCBForm xml={xml} />)).toMatchInlineSnapshot(`
<form>
  <div
    className="title"
  >
    ${possibleTitles[randomNumber]}
  </div>
  <div
    className="secondary-title"
  />
</form>
`);
  });

  it("should render a 2nd title pulling the title from CCB profile section", () => {
    const possibleTitles = [
      "Connect Card Feb",
      "Generic Form",
      "Test Form",
      "March"
    ];
    const randomNumber = Math.floor(Math.random() * possibleTitles.length);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <form>
      <title>Connection Card</title>
      <profile>
        <title>${possibleTitles[randomNumber]}</title>
      </profile>
    </form>
    `;
    expect(shallow(<CCBForm xml={xml} />)).toMatchInlineSnapshot(`
<form>
  <div
    className="title"
  >
    Connection Card
  </div>
  <div
    className="secondary-title"
  >
    ${possibleTitles[randomNumber]}
  </div>
</form>
`);
  });
});
