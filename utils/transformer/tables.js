const row = (html) => `<tr>\n${html}</tr>\n`,
  heading = (object) =>
    row(
      Object.keys(object).reduce(
        (html, heading) =>
          html +
          `<th style="vertical-align: bottom;border-bottom: 2px solid #dee2e6;border-top: 1px solid #dee2e6;padding: .75rem;text-align: left;">${heading}</th>`,
        ""
      )
    ),
  datarow = (object) =>
    row(
      Object.values(object).reduce(
        (html, value) =>
          html +
          `<td style="padding: .75rem;vertical-align: top;border-bottom: 1px solid #dee2e6;">${value}</td>`,
        ""
      )
    );

const htmlTable = (dataList) => {
  return `<table style="width:100%;border-collapse: collapse;">
            ${heading(dataList[0])}
            ${dataList.reduce((html, object) => html + datarow(object), "")}
          </table>`;
};
module.exports = { htmlTable };
