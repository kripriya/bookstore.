import Book from "../model/book.model.js";


export const getBook = async(req,res) => {
     try {
      const book = await Book.find({});
      res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
        
    }
};
export const createBook = async (req, res) => {
    try {
        console.log(req.body)
        const { name, price, category, image, title } = req.body;
        
        // Create a new book instance
        const newBook = new Book({ name, price, category, image, title });
        
        // Save the book to the database
        await newBook.save();
        
        res.status(201).json(newBook);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};