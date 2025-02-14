let book = {
    title: "객체를 공부해보자",
    price: "20000",
    description: "객체에 대해 완벽히 이해해보세요.",
    printDetails: function () {
        console.log(book.title + "\n" + book.price + "\n" + book.description);
    },
};

book.printDetails();
