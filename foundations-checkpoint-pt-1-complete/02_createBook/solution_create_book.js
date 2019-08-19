let book =
{
  getPrice() { return this.price; },
  getInfo() { return this.title + " by " + this.author; },
  addRating(a) { this.rating.push(a); },
  getRating()
  {
    let avg = 0;
    for (let i = 0; i < this.rating.length; i++)
    {
      avg += this.rating[i].length;
    }
    return avg / this.rating.length;
  }
};

function createBook(id, title, author, price, rating = [])
{
  let thisBook = Object.create(book);
  thisBook.id = id;
  thisBook.title = title;
  thisBook.author = author;
  thisBook.price = price;
  thisBook.rating = rating;

  return thisBook;
}
