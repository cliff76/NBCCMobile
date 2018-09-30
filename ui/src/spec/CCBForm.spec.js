import CCBForm from '../ccb/forms';
const util = require('util');
const fs = require('fs');
fs.readFileAsync = util.promisify(fs.readFile);

describe('CCBForms', () => {
  it('should contain the xml passed via its constructor', () => {
    return fs.readFileAsync('./src/spec/example-form-detail.xml').then(xmlData => {
      let xml = xmlData.toString();
      const form = new CCBForm(xml);
      expect(form.xml).toEqual(xml);
    });
  });

  it('should generate HTML form fields from CCB Form data.', () => {
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
    const html = new CCBForm(xml).asHTMLForm();
    expect(html).toEqual(`<form>
<div class="title">Connection Card</div>
</form>
`);
  });
});