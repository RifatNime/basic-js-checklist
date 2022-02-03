// 3 book need to print
// book 1 -200page-2copy
// book 2- 100page-3copy
// book-3 300page-3copy
// totale page need for the maker?

function pageNumber(book1PageNumber, book2PageNumber, book3PageNumber){
    const pagePerBook1 = 100;
    const pagePerBook2 = 200;
    const pagePerBook3 = 300;

    // book page calculation
    const book1TotalPage =  book1PageNumber * pagePerBook1;
    console.log('Book 1 Total Page Need:', book1TotalPage);

    const book2TotalPage =  book2PageNumber * pagePerBook2;
    console.log('Book 2 Total Page Need:', book2TotalPage);

    const book3TotalPage =  book3PageNumber * pagePerBook3;
    console.log('Book 3 Total Page Need:', book3TotalPage);

    const totalPages = book1TotalPage +  book2TotalPage + book3TotalPage;
    return totalPages;

}
const booksQuantity = pageNumber(2,3,3);
console.log('3 Books total Pages Need: ', booksQuantity);