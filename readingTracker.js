// Weekly reading log
// This array stores reading data as objects.
// Each object has a day, book title, and number of minutes read.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/*
This function adds a new book reading entry to the reading log.
It uses day, book, and minutes as inputs.
It creates a new object and adds it to the readingLog array.
*/
function addReadBook(day, book, minutes) {
  // Creates a new object using the data passed into the function.
  const newEntry = { day, book, minutes };

  // Adds the new reading entry to the end of the readingLog array.
  readingLog.push(newEntry);
}

/*
This function calculates the total number of minutes read.
It uses a reading log array as input.
It returns one number representing all reading minutes combined.
*/
function totalReadingMinutes(log) {
  // Starts the total at 0 before adding each entry's minutes.
  let total = 0;

  // Loops through every object in the log array.
  for (let entry of log) {
    // Adds the minutes from the current entry to the total.
    total += entry.minutes;
  }

  // Returns the final total after the loop is finished.
  return total;
}

/*
This function finds which book was read most frequently.
It uses a reading log array as input.
It returns the book title that appears the most in the log.
*/
function mostReadBook(log) {
  // This object stores each book title and how many times it appears.
  const bookCounts = {};

  // Loops through the log to count each book.
  for (let entry of log) {
    // If the book is not in bookCounts yet, start its count at 1.
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      // If the book already exists, increase its count by 1.
      bookCounts[entry.book]++;
    }
  }

  // maxBook stores the book with the highest count.
  let maxBook = null;

  // maxCount stores the largest number of times a book appears.
  let maxCount = 0;

  // Loops through the bookCounts object to find the highest count.
  for (let book in bookCounts) {
    // Checks whether the current book has been read more often.
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }

  // Returns the most frequently read book.
  return maxBook;
}

/*
This function prints a daily reading summary.
It uses a reading log array as input.
It does not return a value, but prints each entry to the console.
*/
function printDailySummary(log) {
  // Loops through each reading entry in the array.
  for (let entry of log) {
    // Prints the day, minutes, and book title.
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Suggested improvement:
// The function name addReadBook could be renamed to addReadingEntry.
// This would be clearer because the function adds a full log entry, not just a book.

// Example usage
addReadBook("Saturday", "Dune", 50);

// New test case
addReadBook("Sunday", "The Hobbit", 35);

printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));