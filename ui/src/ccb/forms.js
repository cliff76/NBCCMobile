export default class Forms {
  constructor(xml) {
    this.xml = xml;
  }

  asHTMLForm() {
    return `<form>
<div class="title">Connection Card</div>
</form>
`;
  }
}