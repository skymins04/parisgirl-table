var _t_num = 0;

var addColumn = function () {
    var _th = document.getElementsByClassName('tableHead')[0];
    var _td = document.getElementsByClassName('tableBody')[0];

    var _n = document.getElementsByClassName('inputTableName')[0].value;
    var _c1 = document.getElementsByClassName('inputTableCol1')[0].value;
    var _c2 = document.getElementsByClassName('inputTableCol2')[0].value;
    var _c3 = document.getElementsByClassName('inputTableCol3')[0].value;
    
    var _newTh = document.createElement('div');
    var _newTd = document.createElement('div');

    _newTh.setAttribute('class', 't'+_t_num);
    var _ele_th = document.createElement('span');
    _ele_th.innerHTML = _n;
    _newTh.appendChild(_ele_th);

    _newTd.setAttribute('class', 't'+_t_num);
    var _ele_c1 = document.createElement('div');
    var _ele_c2 = document.createElement('div');
    var _ele_c3 = document.createElement('div');
    _ele_c1.innerHTML = "<div class=\"checkBox\" onclick=\"checkBox(event)\"></div>";
    _ele_c2.innerHTML = "<div class=\"checkBox\" onclick=\"checkBox(event)\"></div>";
    _ele_c3.innerHTML = "<div class=\"checkBox\" onclick=\"checkBox(event)\"></div>";
    _ele_c1.appendChild(document.createElement('span'));
    _ele_c2.appendChild(document.createElement('span'));
    _ele_c3.appendChild(document.createElement('span'));
    _ele_c1.children[1].innerHTML = _c1;
    _ele_c2.children[1].innerHTML = _c2;
    _ele_c3.children[1].innerHTML = _c3;
    _newTd.appendChild(_ele_c1);
    _newTd.appendChild(_ele_c2);
    _newTd.appendChild(_ele_c3);

    _th.appendChild(_newTh);
    _td.appendChild(_newTd);

    _t_num += 1;
};

var downloadURI = function (_uri, _name) {
    var link = document.createElement('a');
    link.download = _name;
    link.href = _uri;
    document.body.appendChild(link);
    link.click();
};

var downloadImg = function () {
    html2canvas($('.content')[0]).then(function(canvas) {
        var myImage = canvas.toDataURL();
        downloadURI(myImage, "저장할 파일명.png");
    });
};

var checkBox = function(e) {
    var _t = e.target;

    if(!$(_t).hasClass('active')) {
        $(_t).addClass('active');
    }
    else {
        $(_t).removeClass('active');
    }
};