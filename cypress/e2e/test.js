const xlsx = require('xlsx');
const fs = require('fs');

// Function to read Excel file and convert to JSON
function readExcelFile(filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    return jsonData;
}

// Path to your Excel file
const filePath = 'cypress\\fixtures\\TestDataExcel.xlsx';

// Read the Excel file and print the JSON data
const jsonData = readExcelFile(filePath);
console.log(JSON.stringify(jsonData, null, 2));