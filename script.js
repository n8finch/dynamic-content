console.log(dynCont);

function compare(a, b) {
    if (a.order < b.order)
        return -1;
    if (a.order > b.order)
        return 1;
    return 0;
}

dynCont.sort(compare);

var body = document.getElementById('body');

dynCont.forEach(function (element) {
    var header = document.createElement('h2');
    var title = document.createTextNode(element.title);
    header.appendChild(title);
    var para = document.createElement('p');
    var text = document.createTextNode(element.content);
    para.appendChild(text);


    body.appendChild(header);
    body.appendChild(para);


}, this);