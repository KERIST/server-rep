require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync({ fource: true }).then(() => {
  console.log("Drop and Resync DB");
});

// db.Item.create({
//   name: "Beige And Black Hat",
//   imageUrl:
//     "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "hats",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 50,
// });

// db.Item.create({
//   name: "Orange Hat",
//   imageUrl:
//     "https://images.pexels.com/photos/1078975/pexels-photo-1078975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "hats",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 50,
// });

// db.Item.create({
//   name: "Black Baseball Cap",
//   imageUrl:
//     "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q",
//   section: "hats",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 50,
// });

// db.Item.create({
//   name: "Black Baseball Cap",
//   imageUrl:
//     "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80	",
//   section: "hats",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 50,
// });

// db.Item.create({
//   name: "Black Baseball Cap",
//   imageUrl:
//     "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80	",
//   section: "hats",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 50,
// });


// db.Item.create({
//   name: "Nike Good Sneakers",
//   imageUrl:
//     "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "sneakers",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 150,
// });

// db.Item.create({
//   name: "Nike Full Foot Sneakers",
//   imageUrl:
//     "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "sneakers",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 120,
// });

// db.Item.create({
//   name: "Nike Air",
//   imageUrl:
//     "https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "sneakers",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 130,
// });

// db.Item.create({
//   name: "Nike Air Basketball",
//   imageUrl:
//     "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "sneakers",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 100,
// });

// db.Item.create({
//   name: "Nike Green Basketball",
//   imageUrl:
//     "https://images.pexels.com/photos/4462781/pexels-photo-4462781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "sneakers",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 90,
// });

// db.Item.create({
//   name: "Adidas Sply-350 V2",
//   imageUrl:
//     "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "sneakers",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 190,
// });


// db.Item.create({
//   name: "Nike Air Jordan 1",
//   imageUrl:
//     "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   section: "sneakers",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 290,
// });

// db.Item.create({
//   name: "Leather jacket",
//   imageUrl:
//     "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80	",
//   section: "jackets",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Black Jean Shearling",
//   imageUrl:
//     "https://i.ibb.co/XzcwL5s/black-shearling.png",
//   section: "jackets",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Blue jacket",
//   imageUrl:
//     "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
//   section: "jackets",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Grey Jean Jacket",
//   imageUrl:
//     "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
//   section: "jackets",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Tan Trench",
//   imageUrl:
//     "https://i.ibb.co/M6hHc3F/brown-trench.png",
//   section: "jackets",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Green Suit",
//   imageUrl:
//     "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80	",
//   section: "suits",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });


// db.Item.create({
//   name: "",
//   imageUrl:
//     "",
//   section: "suits",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });


// db.Item.create({
//   name: "Dark Blue Suit",
//   imageUrl:
//     "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80	",
//   section: "suits",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });


// db.Item.create({
//   name: "Blue Suit",
//   imageUrl:
//     "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80	",
//   section: "suits",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });


// db.Item.create({
//   name: "Black Suit",
//   imageUrl:
//     "https://images.unsplash.com/photo-1592878897400-43fb1f1cc324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80	",
//   section: "suits",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Blue Suit",
//   imageUrl:
//     "https://images.unsplash.com/photo-1594938328870-9623159c8c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
//   section: "suits",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });


// db.Item.create({
//   name: "Dress",
//   imageUrl:
//     "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80	",
//   section: "women",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Jacket",
//   imageUrl:
//     "https://images.unsplash.com/photo-1573495782715-34f01d853a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80	",
//   section: "women",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Shirt",
//   imageUrl:
//     "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80	",
//   section: "women",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Jacket",
//   imageUrl:
//     "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80	",
//   section: "women",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Leather jacket",
//   imageUrl:
//     "https://images.unsplash.com/photo-1490092374320-1ca36d69ff6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80	",
//   section: "women",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });


// db.Item.create({
//   name: "jumper",
//   imageUrl:
//     "https://images.unsplash.com/photo-1609132718484-cc90df3417f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80	",
//   section: "women",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Black jumper",
//   imageUrl:
//     "https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80	",
//   section: "men",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "Crocodile t-shirt",
//   imageUrl:
//     "https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q",
//   section: "men",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "lumberjack's shirt",
//   imageUrl:
//     "https://images.unsplash.com/photo-1616002851413-ebcc9611139d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80	",
//   section: "men",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "White shirt",
//   imageUrl:
//     "https://images.unsplash.com/photo-1604820729316-01d623ede516?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80	",
//   section: "men",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

// db.Item.create({
//   name: "shorts",
//   imageUrl:
//     "https://images.unsplash.com/photo-1610996208943-214626aeff33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80	",
//   section: "men",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!",
//   sizes: "1,2,3",
//   price: 57,
// });

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome" });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/item.routes")(app);
require("./app/routes/review.routes")(app);
require("./app/routes/cart.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
