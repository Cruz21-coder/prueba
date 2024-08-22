window.onload = function() {
    const form = document.getElementById('miFormulario');
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const monto = document.getElementById('monto').value;
        const promocode = document.getElementById('promocode').value;
        const nombrelegal = document.getElementById('nombrelegal').value;
        const emaillegal = document.getElementById('emaillegal').value;
        const fechalegal = document.getElementById('fechalegal').value;
        const lugarlegal = document.getElementById('lugarlegal').value;
        const rfclegal = document.getElementById('rfclegal').value;
        const curplegal = document.getElementById('curplegal').value;
        const civil = document.getElementById('civil').value;
        const regimen = document.getElementById('regimen').value;
        const cpdomicilio = document.getElementById('cpdomicilio').value;
        const domiciliodomicilio = document.getElementById('domiciliodomicilio').value;
        const coloniadomicilio = document.getElementById('coloniadomicilio').value;
        const ciudaddomicilio = document.getElementById('ciudaddomicilio').value;
        const municipiodomicilio = document.getElementById('municipiodomicilio').value;
        const estadodomicilio = document.getElementById('estadodomicilio').value;
        const tiempodomicilio = document.getElementById('tiempodomicilio').value;
        const telefonodomicilio = document.getElementById('telefonodomicilio').value;
        const nombrenegocio = document.getElementById('nombrenegocio').value;
        const cpnegocio = document.getElementById('cpnegocio').value;
        const domicilionegocio = document.getElementById('domicilionegocio').value;
        const colonianegocio = document.getElementById('colonianegocio').value;
        const ciudadnegocio = document.getElementById('ciudadnegocio').value;
        const municipionegocio = document.getElementById('municipionegocio').value;
        const estadonegocio = document.getElementById('estadonegocio').value;
        const tiemponegocio = document.getElementById('tiemponegocio').value;
        const telefononegocio = document.getElementById('telefononegocio').value;
        const anosfuncionamiento = document.getElementById('anosfuncionamiento').value;
        const recursofuncionamiento = document.getElementById('recursofuncionamiento').value;
        const ingresfuncionamiento = document.getElementById('ingresfuncionamiento').value;
        const actividadfuncionamiento = document.getElementById('actividadfuncionamiento').value;
        const banco = document.getElementById('banco').value;
        const clabeinterbancaria = document.getElementById('clabeinterbancaria').value;
        const nombrefamiliar1 = document.getElementById('nombrefamiliar1').value;
        const parentescofamiliar1 = document.getElementById('parentescofamiliar1').value;
        const telefonofamiliar1 = document.getElementById('telefonofamiliar1').value;
        const nombrefamiliar2 = document.getElementById('nombrefamiliar2').value;
        const parentescofamiliar2 = document.getElementById('parentescofamiliar2').value;
        const telefonofamiliar2 = document.getElementById('telefonofamiliar2').value;
        const existingPdfBytes = await fetch('src/Aspira.pdf').then(res => res.arrayBuffer());
        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { width, height } = firstPage.getSize();
        const fontSize = 12;

        if (data.opcionpersona === 'opcion1') {
            firstPage.drawText('X', { x: 105, y: height - 184, size: fontSize });
        } else if (data.opcionpersona === 'opcion2') {
            firstPage.drawText('X', { x: 225, y: height - 184, size: fontSize });
        }

        if (data.tipodomicilio === 'rento') {
            firstPage.drawText('X', { x: 340, y: height - 310, size: fontSize });
        } else if (data.tipodomicilio === 'propio') {
            firstPage.drawText('X', { x: 440, y: height - 310, size: fontSize });
        }

        if (data.tiponegocio === 'rento') {
            firstPage.drawText('X', { x: 515, y: height - 382, size: fontSize });
        } else if (data.tiponegocio === 'propio') {
            firstPage.drawText('X', { x: 95, y: height - 396, size: fontSize });
        }

        firstPage.drawText(monto, { x: 85, y: height - 120, size: fontSize });
        firstPage.drawText(promocode, { x: 353, y: height - 120, size: fontSize });
        firstPage.drawText(nombrelegal, { x: 93, y: height - 170, size: fontSize });
        firstPage.drawText(emaillegal, { x: 330, y: height - 170, size: fontSize });
        firstPage.drawText(fechalegal, { x: 175, y: height - 199, size: fontSize });
        firstPage.drawText(lugarlegal, { x: 250, y: height - 199, size: fontSize });
        firstPage.drawText(rfclegal, { x: 75, y: height - 212, size: fontSize });
        firstPage.drawText(curplegal, { x: 330, y: height - 212, size: fontSize });
        firstPage.drawText(civil, { x: 105, y: height - 227, size: fontSize });
        firstPage.drawText(regimen, { x: 385, y: height - 227, size: fontSize });
        firstPage.drawText(cpdomicilio, { x: 73, y: height - 281, size: fontSize });
        firstPage.drawText(domiciliodomicilio, { x: 258, y: height - 281, size: fontSize });
        firstPage.drawText(coloniadomicilio, { x: 427, y: height - 281, size: fontSize });
        firstPage.drawText(ciudaddomicilio, { x: 88, y: height - 295, size: fontSize });
        firstPage.drawText(municipiodomicilio, { x: 258, y: height - 295, size: fontSize });
        firstPage.drawText(estadodomicilio, { x: 425, y: height - 295, size: fontSize });
        firstPage.drawText(tiempodomicilio, { x: 142, y: height - 310, size: fontSize });
        firstPage.drawText(telefonodomicilio, { x: 500, y: height - 310, size: fontSize });
        firstPage.drawText(nombrenegocio, { x: 141, y: height - 353, size: fontSize });
        firstPage.drawText(cpnegocio, { x: 295, y: height - 353, size: fontSize });
        firstPage.drawText(domicilionegocio, { x: 437, y: height - 353, size: fontSize });
        firstPage.drawText(colonianegocio, { x: 90, y: height - 367, size: fontSize });
        firstPage.drawText(ciudadnegocio, { x: 308, y: height - 367, size: fontSize });
        firstPage.drawText(municipionegocio, { x: 438, y: height - 367, size: fontSize });
        firstPage.drawText(estadonegocio, { x: 89, y: height - 382, size: fontSize });
        firstPage.drawText(tiemponegocio, { x: 361, y: height - 382, size: fontSize });
        firstPage.drawText(telefononegocio, { x: 293, y: height - 396, size: fontSize });
        firstPage.drawText(anosfuncionamiento, { x: 141, y: height - 440, size: fontSize });
        firstPage.drawText(recursofuncionamiento, { x: 420, y: height - 440, size: fontSize });
        firstPage.drawText(ingresfuncionamiento, { x: 122, y: height - 454, size: fontSize });
        firstPage.drawText(actividadfuncionamiento, { x: 402, y: height - 454, size: fontSize });
        firstPage.drawText(banco, { x: 90, y: height - 502, size: fontSize });
        firstPage.drawText(clabeinterbancaria, { x: 402, y: height - 502, size: fontSize });
        firstPage.drawText(nombrefamiliar1, { x: 98, y: height - 608, size: fontSize });
        firstPage.drawText(parentescofamiliar1, { x: 360, y: height - 608, size: fontSize });
        firstPage.drawText(telefonofamiliar1, { x: 73, y: height - 623, size: fontSize });
        firstPage.drawText(nombrefamiliar2, { x: 98, y: height - 653, size: fontSize });
        firstPage.drawText(parentescofamiliar2, { x: 360, y: height - 653, size: fontSize });
        firstPage.drawText(telefonofamiliar2, { x: 73, y: height - 668, size: fontSize });
        
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'FormularioAspira.pdf';
        a.click();
    });
};