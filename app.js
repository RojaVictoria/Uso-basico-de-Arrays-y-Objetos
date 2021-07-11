"use strict";

//Arreglos y objetos de cada lista
const pacientesRadiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];

const pacientesTraumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    },
];

const pacientesDental = [
    {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    },
];

//Primera y última atención de cada lista
document.write("Primera atención: " + pacientesRadiologia[0].paciente + " - " + pacientesRadiologia[0].prevision + " | " + "Última atención: " + pacientesRadiologia[4].paciente + " - " + pacientesRadiologia[4].prevision + "<br/>") 

document.write("Primera atención: " + pacientesTraumatologia[0].paciente + " - " + pacientesTraumatologia[0].prevision + " | " + "Última atención: " + pacientesTraumatologia[6].paciente + " - " + pacientesTraumatologia[6].prevision + "<br/>") 

document.write("Primera atención: " + pacientesDental[0].paciente + " - " + pacientesDental[0].prevision + " | " + "Última atención: " + pacientesDental[5].paciente + " - " + pacientesDental[5].prevision + "<br/>")

//Tablas
let texto1 = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";

for (let i = 0; i < pacientesRadiologia.length; i++) {
        texto1 += `<tr>
            <td>${pacientesRadiologia[i].hora}</td>
            <td>${pacientesRadiologia[i].especialista}</td>
            <td>${pacientesRadiologia[i].paciente}</td>
            <td>${pacientesRadiologia[i].rut}</td>
            <td>${pacientesRadiologia[i].prevision}</td>
        </tr>`;
};
document.getElementById("tabla1").innerHTML = texto1;

let texto2 = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";


for (let i = 0; i < pacientesTraumatologia.length; i++) {
    texto2 += `<tr>
        <td>${pacientesTraumatologia[i].hora}</td>
        <td>${pacientesTraumatologia[i].especialista}</td>
        <td>${pacientesTraumatologia[i].paciente}</td>
        <td>${pacientesTraumatologia[i].rut}</td>
        <td>${pacientesTraumatologia[i].prevision}</td>
    </tr>`;
};
document.getElementById("tabla2").innerHTML = texto2;

let texto3 = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";

for (let i = 0; i < pacientesDental.length; i++) {
    texto3 += `<tr>
        <td>${pacientesDental[i].hora}</td>
        <td>${pacientesDental[i].especialista}</td>
        <td>${pacientesDental[i].paciente}</td>
        <td>${pacientesDental[i].rut}</td>
        <td>${pacientesDental[i].prevision}</td>
    </tr>`;
};
document.getElementById("tabla3").innerHTML = texto3;