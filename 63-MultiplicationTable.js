function multiplicationTable(number) {

    let output = `<table border=1>`;
    output += `\n`;
    for (let idx = 1; idx <= number; idx++) {
        output += `<tr>`;
        if (idx === 1) {
            output += `<th>x</th>`;
        }
        output += `<th>${idx}</th>`;
    }
    output += `</tr>\n`;
    for (let row = 1; row <= number; row++) {
        output += `<th>${row}</th>`;
        for (let col = 1; col <= number; col++) {
             if (col === 1) {
               output += `<th>${row * col}</th>`;
             }
            output += `<td>${row * col}</td>`;
        }
        output += `</tr>`;
        output += `\n`;
    }
    output += `</table>`;
    return output;
}

//multiplicationTable(5);