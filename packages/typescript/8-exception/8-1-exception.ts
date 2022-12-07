// Java : Exception
// JavaScript : Error
// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return `file contents`;
}

function closeFile(fileName: string) {
  //
}

const fileName = "not exist!";
try {
  console.log(readFile(fileName));
} catch (err) {
  console.log("catched!!");
  console.log(err);
} finally {
  console.log("finally");
  closeFile(fileName);
}
console.log("program is not dead");
