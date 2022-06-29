class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`

    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }
    
    printFavoriteBooks() {
        console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
        for (let bookName of this.favoriteBooks) {
            console.log(String(bookName));
        }
    }
}


function loadBooks(theBookShelf) {
    fakeAjax(BOOK_API, (books) => {
        for(let book of books) {
            theBookShelf.addFavoriteBook(book);
        }
        console.log("Books Loaded");
        theBookShelf.printFavoriteBooks();
    });
}

var BOOK_API = "https://some.url/api";


// ***********************
// NOTE: don't modify this function at all

function fakeAjax(url,cb) {
	setTimeout(()=>{
        console.log("Calling Callback from " + url);
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

const bookshelf = new Bookshelf();
loadBooks(bookshelf);