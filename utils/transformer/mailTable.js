const row = (html) => `<tr>\n${html}</tr>\n`,
  heading = (object) =>
    row(
      Object.keys(object).reduce(
        (html, heading) => html + `<th>${heading}</th>`,
        ""
      )
    ),
  datarow = (object) =>
    row(
      Object.values(object).reduce(
        (html, value) => html + `<td>${value}</td>`,
        ""
      )
    );

const htmlTable = (dataList) => {
  return `<table>
            ${heading(dataList[0])}
            ${dataList.reduce((html, object) => html + datarow(object), "")}
          </table>`;
};
module.exports = { htmlTable };
