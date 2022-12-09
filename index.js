const form = document.getElementById("TransferirFormulario");

form.addEventListener ("submit", function(event) {
    event.preventDefault();
    let TransactionFormData = new FormData(form);
    let transactionObj = convertFormDatoToTransactionObj(TransactionFormData)
    saveTransactionObj(transactionObj)
    insertRowInTransactionTable(transactionObj)
    form.reset();
})

document.addEventListener("DOMContentLoaded", function(event){
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"))
    transactionObjArr.forEach(
        function(arrayElement) {
            insertRowInTransactionTable(arrayElement)
        }
    )
})

function convertFormDatoToTransactionObj(TransactionFormData) {
    let FechaPrestamo = TransactionFormData.get("FechaPrestamo");
    let NombreLibro = TransactionFormData.get("NombreLibro");
    let CodigoLibro = TransactionFormData.get("CodigoLibro");
    let FechaLibro = TransactionFormData.get("FechaLibro");
    let NombreAlumno = TransactionFormData.get("NombreAlumno");
    let GrupYGradAlumn = TransactionFormData.get("GrupYGradAlumn")
    return {
        "FechaPrestamo": FechaPrestamo,
        "NombreLibro": NombreLibro,
        "CodigoLibro": CodigoLibro,
        "FechaLibro": FechaLibro,
        "NombreAlumno": NombreAlumno,
        "GrupYGradAlumn": GrupYGradAlumn,
    }

}

function insertRowInTransactionTable(transactionObj) {
    let PrestamoTableRef = document.getElementById("PrestamoTable");
    let newPrestamoRowRef = PrestamoTableRef.insertRow(-1);

    let newTypeCellRef = newPrestamoRowRef.insertCell(0);
    newTypeCellRef.textContent = transactionObj["FechaPrestamo"];

    newTypeCellRef = newPrestamoRowRef.insertCell(1);
    newTypeCellRef.textContent = transactionObj["NombreLibro"];

    newTypeCellRef = newPrestamoRowRef.insertCell(2);
    newTypeCellRef.textContent = transactionObj["CodigoLibro"];

    newTypeCellRef = newPrestamoRowRef.insertCell(3);
    newTypeCellRef.textContent = transactionObj["FechaLibro"];

    newTypeCellRef = newPrestamoRowRef.insertCell(4);
    newTypeCellRef.textContent = transactionObj["NombreAlumno"];

    newTypeCellRef = newPrestamoRowRef.insertCell(5);
    newTypeCellRef.textContent = transactionObj["GrupYGradAlumn"];
}

function saveTransactionObj(transactionObj) {
    let myTransactionArray = JSON.parse(localStorage.getItem("transactionData")) || [];
    myTransactionArray.push(transactionObj);
    let transactionArrayJSON = JSON.stringify(myTransactionArray);
    localStorage.setItem("transactionData", transactionArrayJSON);
}
//si alguien llega a leer esto quiero que sepa que sufrí haciendo esta ultima funcion TvT