const btnGerarPdf = document.querySelector("#generate-pdf");

btnGerarPdf.addEventListener('click' , () => {

    const content = document.querySelector(".content");
    const  form = document.querySelector(".informcao__rat");
    console.log(content);
    const options = {
        margin: 0,
        filename: "RAT Exemplo",
        html2canvas: {
            x: 286,
            y: 30,
            height: 1000,
            scale: 1
        },
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"} 
    }

    html2pdf().set(options).from(form).save();
})