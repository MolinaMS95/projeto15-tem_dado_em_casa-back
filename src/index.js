import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import productsRoutes from "./routes/products.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/orders.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(usersRoutes);
app.use(productsRoutes);
app.use(cartRoutes);
app.use(orderRoutes);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server running in port: ${port}`));
