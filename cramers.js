
// variables
var mainMatrix = document.getElementById('mainMatrix');
var dxMatrix = document.getElementById('dxMatrix');
var dyMatrix = document.getElementById('dyMatrix');
var dzMatrix = document.getElementById('dzMatrix');
var dx = document.getElementById('dx');
var dy = document.getElementById('dy');
var dz = document.getElementById('dz');
var x = document.getElementById('x');
var y = document.getElementById('y');
var z = document.getElementById('z');
var mainCont = document.getElementById('mainCont');
var detCont = document.getElementById('detCont');
var solution = document.getElementById('solution');
var final = document.getElementById('final');
var mD = document.getElementById('mD');
var display = document.getElementById('display');

// refresh stopper for form
document.getElementById("matrixForm").addEventListener("submit", function(event) {
    event.preventDefault();
    solveMatrix();
});

// main method
function solveMatrix() {
    
    // gets the inputs values from the matrix
    var a1 = parseInt(document.getElementById('a1').value);
    var a2 = parseInt(document.getElementById('a2').value);
    var a3 = parseInt(document.getElementById('a3').value);

    var b1 = parseInt(document.getElementById('b1').value);
    var b2 = parseInt(document.getElementById('b2').value);
    var b3 = parseInt(document.getElementById('b3').value);

    var c1 = parseInt(document.getElementById('c1').value);
    var c2 = parseInt(document.getElementById('c2').value);
    var c3 = parseInt(document.getElementById('c3').value);

    var d1 = parseInt(document.getElementById('d1').value);
    var d2 = parseInt(document.getElementById('d2').value);
    var d3 = parseInt(document.getElementById('d3').value);

    // process
    var answerDet = calculateDeterminant(a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3,);
    var matrices = displayMatrix(a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3,answerDet);


    // remove input table's center div class
    if (mD) {
        mD.className = mD.className.replace('centered-div', '').trim();
    }

    // display temporary stylings
    display.style.backgroundColor = '#d7f0e9'
    detCont.style.justifyContent ='space-around';
    solution.style.padding = '10px';


    // displays
    solution.innerHTML = '<u>Solution</u>:';

    mainMatrix.innerHTML = matrices[0];

    dxMatrix.innerHTML = matrices[1];
    dxMatrix.style.backgroundColor = '#6fabd0';

    dyMatrix.innerHTML = matrices[2];
    dyMatrix.style.backgroundColor = '#92c0d7';

    dzMatrix.innerHTML = matrices[3];
    dzMatrix.style.backgroundColor = '#b0';

    x.innerHTML = matrices[4];
    y.innerHTML = matrices[5];
    z.innerHTML = matrices[6];

}



// displays
function displayMatrix(a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3, answerDet){
    var mainDet = `
    <div>
        <div class="container">
            <h1>D = </h1>
            <table class="matrix ">
                <tr>
                    <td>${a1}</td>
                    <td>${a2}</td>
                    <td>${a3}</td>
                </tr>
                <tr>
                    <td>${b1}</td>
                    <td>${b2}</td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td>${c2}</td>
                    <td>${c3}</td>
                </tr>
            </table>
        </div>
    
        <div class="container">
            <h2>(${a1})</h2>
            <table class="matrix ">
                <tr>
                    <td>${b2}</td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td>${c2}</td>
                    <td>${c3}</td>
                </tr>
            </table>

            <h3><span class="fontSize"> - </span></h3>
            
            <h2>(${a2})</h2>
            <table class="matrix ">
                <tr>
                    <td>${b1}</td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td>${c3}</td>
                </tr>
            </table>

            <h3><span class="fontSize"> + </span></h3>

            <h2>(${a3})</h2>
            <table class="matrix ">
                <tr>
                    <td>${b1}</td>
                    <td>${b2}</td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td>${c2}</td>
                </tr>
            </table>
        </div>
        <div class="container">
            <h2>((${a1})*(${answerDet[1]}))-((${a2})*(${answerDet[2]}))+((${a3})*(${answerDet[3]}))</h2>
        </div>
        <div class="container">
            <h1>D = ${answerDet[0]}</h1>
        </div>
    </div>
    `;

    var dxMatrix =`
    <div>
        <div class="container">
            <h1>Dx = </h1>
            <table class="matrix">
                <tr>
                    <td><span class="determinant">${d1}</span></td>
                    <td>${a2}</td>
                    <td>${a3}</td>
                </tr>
                <tr>
                    <td><span class="determinant">${d2}</span></td>
                    <td>${b2}</td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td><span class="determinant">${d3}</span></td>
                    <td>${c2}</td>
                    <td>${c3}</td>
                </tr>
            </table>
        </div>
        <div class="container">
            <h4>(<span class="determinant">${d1}</span>)</h4>
            <table class="matrix ">
                <tr>
                    <td>${b2}</td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td>${c2}</td>
                    <td>${c3}</td>
                </tr>
            </table>

            <h5><span class="fontSize"> - </span></h5>
                
            <h4>(${a2})</h4>
            <table class="matrix ">
                <tr>
                    <td><span class="determinant">${d2}</span></td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td><span class="determinant">${d3}</span></td>
                    <td>${c3}</td>
                </tr>
            </table>

            <h5><span class="fontSize"> + </span></h5>

            <h4>(${a3})</h4>
            <table class="matrix ">
                <tr>
                    <td><span class="determinant">${d2}</span></td>
                    <td>${b2}</td>
                </tr>
                <tr>
                    <td><span class="determinant">${d3}</span></td>
                    <td>${c2}</td>
                </tr>
                </table>
            </div>
            <div class="container">
                <h4>((<span class="determinant">${d1}</span>)*(${answerDet[5]}))-((${a2})*(${answerDet[6]}))+((${a3})*(${answerDet[7]}))</h4>
            </div>
            <div class="container">
                <h1>Dx = ${answerDet[4]}</h1>
            </div>
        </div>
    </div>

    `;

    var dyMatrix =`
    <div>
        <div class="container">
            <h1>Dy = </h1>
            <table class="matrix">
                <tr>
                    <td>${a1}</td>
                    <td><span class="determinant">${d1}</span></td>
                    <td>${a3}</td>
                </tr>
                <tr>
                    <td>${b1}</td>
                    <td><span class="determinant">${d2}</span></td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td><span class="determinant">${d3}</span></td>
                    <td>${c3}</td>
                </tr>
            </table>
        </div>
        <div class="container">
            <h4>(${a1})</h4>
            <table class="matrix ">
                <tr>
                    <td><span class="determinant">${d2}</span></td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td><span class="determinant">${d3}</span></td>
                    <td>${c3}</td>
                </tr>
            </table>

            <h5><span class="fontSize"> - </span></h5>
                
            <h4>(<span class="determinant">${d1}</span>)</h4>
            <table class="matrix ">
                <tr>
                    <td>${b1}</td>
                    <td>${b3}</td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td>${c3}</td>
                </tr>
            </table>

            <h5><span class="fontSize"> + </span></h5>

            <h4>(${a3})</h4>
            <table class="matrix ">
                <tr>
                    <td>${b1}</td>
                    <td><span class="determinant">${d2}</span></td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td><span class="determinant">${d3}</span></td>
                </tr>
                </table>
            </div>
            <div class="container">
                <h4>((${a1})*(${answerDet[9]}))-((<span class="determinant">${d1}</span>)*(${answerDet[10]}))+((${a3})*(${answerDet[11]}))</h4>
            </div>
            <div class="container">
                <h1>Dy = ${answerDet[8]}</h1>
            </div>
        </div>
    </div>

    `;

    var dzMatrix =`
    <div>
        <div class="container">
            <h1>Dz = </h1>
            <table class="matrix">
                <tr>
                    <td>${a1}</td>
                    <td>${a2}</td>
                    <td><span class="determinant">${d1}</span></td>
                </tr>
                <tr>
                    <td>${b1}</td>
                    <td>${b2}</td>
                    <td><span class="determinant">${d2}</span></td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td>${c2}</td>
                    <td><span class="determinant">${d3}</span></td> 
                </tr>
            </table>
        </div>
        <div class="container">
            <h4>(${a1})</h4>
            <table class="matrix ">
                <tr>
                    <td>${b2}</td>
                    <td><span class="determinant">${d2}</span></td>
                </tr>
                <tr>
                    <td>${c2}</td>
                    <td><span class="determinant">${d3}</span></td>
                </tr>
            </table>

            <h5><span class="fontSize"> - </span></h5>
                
            <h4>(${a2})</h4>
            <table class="matrix ">
                <tr>
                    <td>${b1}</td>
                    <td><span class="determinant">${d2}</span></td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td><span class="determinant">${d3}</span></td>
                </tr>
            </table>

            <h5><span class="fontSize"> + </span></h5>

            <h4>(<span class="determinant">${d1}</span>)</h4>
            <table class="matrix ">
                <tr>
                    <td>${b1}</td>
                    <td>${b2}</td>
                </tr>
                <tr>
                    <td>${c1}</td>
                    <td>${c2}</td>
                </tr>
                </table>
            </div>
            <div class="container">
                <h4>((${a1})*(${answerDet[13]}))-((${a2})*(${answerDet[14]}))+((<span class="determinant">${d1}</span>)*(${answerDet[15]}))</h4>
            </div>
            <div class="container">
                <h1>Dz = ${answerDet[12]}</h1>
            </div>
        </div>
    </div>

    `;

    var x =`
    <h1>X = <div class="fraction">
                <span pan class="numerator">dX</span>
                <span class="divider"></span>
                <span class="denominator">d</span>
            </div> = <div class="fraction">
                        <span pan class="numerator">${answerDet[4]}</span>
                        <span class="divider"></span>
                        <span class="denominator">${answerDet[0]}</span>
                    </div> = <span class="">${answerDet[16]}</span></h1>
    `;

    var y =`
    <h1>Y = <div class="fraction">
                <span pan class="numerator">dY</span>
                <span class="divider"></span>
                <span class="denominator">d</span>
            </div> = <div class="fraction">
                <span pan class="numerator">${answerDet[8]}</span>
                <span class="divider"></span>
                <span class="denominator">${answerDet[0]}</span>
            </div> = <span class="">${answerDet[17]}</span></h1>
    `;

    var z =`
    <h1>Z = <div class="fraction">
                <span pan class="numerator">dZ</span>
                <span class="divider"></span>
                <span class="denominator">d</span>
            </div> = <div class="fraction">
                <span pan class="numerator">${answerDet[12]}</span>
                <span class="divider"></span>
                <span class="denominator">${answerDet[0]}</span>
            </div> = <span class="">${answerDet[18]}</span></h1>
        `;

    return [mainDet, dxMatrix, dyMatrix, dzMatrix, x, y, z];
}

// converting answers into fraction
function toFraction(n, d) {

    numerator = Math.abs(n);
    denominator = Math.abs(d);

    //GCD algorithm 
    while (denominator !== 0) {
    var temp = denominator;
    denominator = numerator % denominator;
    numerator = temp;
    }

    // assign result
    newNum = n/numerator;
    newDeno = d/numerator;

    if (Number.isNaN(newNum) && Number.isNaN(newDeno) ) {
        return `<span class="answer">0</span>`;
    } else {
        return `<div class="fraction fanswer">
                    <span class="numerator">${newNum}</span>
                    <span class="adivider"></span>
                    <span class="denominator">${newDeno}</span>
                </div>`;
    }
}

// proccessing matrix / calculating matrix
function calculateDeterminant(a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3) {
    // main
    let det1 = (b2 * c3) - (b3 * c2);
    let det2 = (b1 * c3) - (b3 * c1);
    let det3 = (b1 * c2) - (b2 * c1);

    let mainDet = a1 * det1 - a2 * det2 + a3 * det3;

    // Dx
    let dx1 = (b2 * c3) - (b3 * c2);
    let dx2 = (d2 * c3) - (b3 * d3);
    let dx3 = (d2 * c2) - (b2 * d3);

    let dxDet = d1 * dx1 - a2 * dx2 + a3 * dx3;

    // Dy
    let dy1 = (d2 * c3) - (b3 * d3);
    let dy2 = (b1 * c3) - (b3 * c1);
    let dy3 = (b1 * d3) - (d2 * c1);

    let dyDet = a1 * dy1 - d1 * dy2 + a3 * dy3;

    // Dz
    let dz1 = (b2 * d3) - (d2 * c2);
    let dz2 = (b1 * d3) - (d2 * c1);
    let dz3 = (b1 * c2) - (b2 * c1);

    let dzDet = a1 * dz1 - a2 * dz2 + d1 * dz3;

    let x = dxDet / mainDet;
    let y = dyDet / mainDet;
    let z = dzDet / mainDet;

    let retX = `<span class="answer">${x}</span>`;
    let retY = `<span class="answer">${y}</span>`;
    let retZ = `<span class="answer">${z}</span>`;

    if (!Number.isInteger(x)) {
        let convertedX = toFraction(dxDet,mainDet);
        if (!Number.isInteger(y)) {
            let convertedY = toFraction(dyDet,mainDet);
            if (!Number.isInteger(z)) {
                let convertedZ = toFraction(dzDet,mainDet);
                return [mainDet, det1, det2, det3, dxDet, dx1, dx2, dx3, dyDet, dy1, dy2, dy3, dzDet, dz1, dz2, dz3, convertedX, convertedY, convertedZ];
            } else {
                return [mainDet, det1, det2, det3, dxDet, dx1, dx2, dx3, dyDet, dy1, dy2, dy3, dzDet, dz1, dz2, dz3, convertedX, convertedY, retZ];
            }
        } else if (!Number.isInteger(z)) {
            let convertedZ = toFraction(dzDet,mainDet);
            return [mainDet, det1, det2, det3, dxDet, dx1, dx2, dx3, dyDet, dy1, dy2, dy3, dzDet, dz1, dz2, dz3, convertedX, retY, convertedZ];
        } else {
            return [mainDet, det1, det2, det3, dxDet, dx1, dx2, dx3, dyDet, dy1, dy2, dy3, dzDet, dz1, dz2, dz3, convertedX, retY, retZ];
        }

    } else if (!Number.isInteger(y)) {
        let convertedY = toFraction(dyDet,mainDet);
        if (!Number.isInteger(z)) {
            let convertedZ = toFraction(dzDet,mainDet);
            return [mainDet, det1, det2, det3, dxDet, dx1, dx2, dx3, dyDet, dy1, dy2, dy3, dzDet, dz1, dz2, dz3, retX, convertedY, convertedZ];
        } else {
            return [mainDet, det1, det2, det3, dxDet, dx1, dx2, dx3, dyDet, dy1, dy2, dy3, dzDet, dz1, dz2, dz3, retX, convertedY, retZ];
        }

    } else if (!Number.isInteger(z)) {
        let convertedZ = toFraction(dzDet,mainDet);
        return [mainDet, det1, det2, det3, dxDet, dx1, dx2, dx3, dyDet, dy1, dy2, dy3, dzDet, dz1, dz2, dz3, retX, retY, convertedZ];

    } else {
        return [mainDet, det1, det2, det3, dxDet, dx1, dx2, dx3, dyDet, dy1, dy2, dy3, dzDet, dz1, dz2, dz3, retX, retY, retZ];
    }
};