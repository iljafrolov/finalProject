import React from "react";
import { useContext } from "react";
import { Link } from "./Link";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { CartIcon } from "./components/icons/index";
import { CartContext } from "./contexts/CartContext";

export const Nav = () => {

  const {itemCount} = useContext(CartContext);

  return (
    <nav>
      <List>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/about">Products</Link>
        </ListItem>
        <ListItem>
          <Link href="/contact/sales"> <CartIcon /> Cart ({itemCount})</Link>
        </ListItem>
        <ListItem>
          <Link href="/contact/general">Contact</Link>
        </ListItem>
      </List>
    </nav>
  );
};
