import { SPRest } from "./SPRest";
import { TableHelper } from "./TableHelper";

let sp = new SPRest("http://localhost:3000/skills");

sp.getSkills().then((data) => {
  const html = TableHelper.getTableHTML(data);
  const tbl = document.querySelector("#tbl");
  tbl.innerHTML = html;
});
