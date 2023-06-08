import { Guest } from "./uploadToFirestore";
import Papa, { ParseResult } from "papaparse";

export const parseCSV = (csvFile: any): Promise<Guest[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvFile, {
      complete: (results: ParseResult<string[]>) => {
        const csvData: string[][] = results.data;

        // Remove the header row if needed
        csvData.shift();

        // Filter out empty rows
        const nonEmptyRows = csvData.filter((row: string[]) =>
          row.some((cell) => cell.trim() !== "")
        );

        // Convert each row of the CSV into a Guest object
        const guests: Guest[] = nonEmptyRows.map((row: string[]) => ({
          name: row[0],
          email: row[1],
        }));

        resolve(guests);
      },
      error: (error: any) => {
        reject(error);
      },
    });
  });
};
