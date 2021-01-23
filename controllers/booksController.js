const booksController = (Book) => {
  const get = (req, res) => {
    const query = {};
    if (req.query.genre) query.genre = req.query.genre;
    Book.find(query, (err, books) => {
      if (err) {
        return res.json(err);
      }
      return res.json(books);
    });
  };

  const post = (req, res) => {
    const book = new Book(req.body);
    if (!req.body.title) {
      res.status(400);
      return res.send('Title is required');
    }
    book.save();
    res.status(201);
    return res.json(book);
  };

  return { get, post };
};

export { booksController as default };
