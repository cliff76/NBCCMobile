import CCBForm from "../ccb/forms";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

const util = require("util");
const fs = require("fs");
fs.readFileAsync = util.promisify(fs.readFile);
configure({ adapter: new Adapter() });

describe("CCBForms", () => {
  it("should contain the xml passed via its constructor", () => {
    return fs
      .readFileAsync("./src/spec/example-form-detail.xml")
      .then(xmlData => {
        let xml = xmlData.toString();
        const form = new CCBForm({ xml });
        expect(form.xml).toEqual(xml);
      });
  });

  it("should render from CCB Form data", () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <ccb_api>
      <response>
        <forms>
          <form>
            <title>Connection Card</title>
          </form>
        </forms>
      </response>
    </ccb_api>
    `;
    const component = shallow(<CCBForm xml={xml} />);
    expect(component).toMatchInlineSnapshot(`
<form>
  <div
    className="title"
  >
    Connection Card
  </div>
</form>
`);
  });

});
