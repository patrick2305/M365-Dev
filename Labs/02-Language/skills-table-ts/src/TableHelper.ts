import { Skill } from "./skill";
export class TableHelper {
  static getTableHTML(data: Skill[]): string {
    console.log("TableHelper, data received:", data);
    var html = `<table border="1" width="100%"><tr><th>ID</th><th>Name</th><th>Completed</th></tr>`;
    data.forEach((item) => {
      html += `<tr style="cursor:pointer" onclick="console.log('You clicked skill: ${item.name}')"><td>${item.id}</td><td>${item.name}</td><td>${item.completed}</td></tr>`;
    });
    html += `</table>`;
    return html;
  }
}
