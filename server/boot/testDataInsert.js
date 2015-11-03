module.exports = function(app) {
  app.models.Book.create({
    title: "A first book"
  }, function(err, book) {
    if (err) throw err;

    book.chapters.create({
      title: "Chapter One",
      pages: 65
    }, function(err, result) {
      if (err) throw err;
    })
  });
};
