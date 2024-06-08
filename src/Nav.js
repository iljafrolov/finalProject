import React from "react";

import { Link } from "./Link";
import { List } from "./List";
import { ListItem } from "./ListItem";

export const Nav = () => {
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
          <Link href="/contact/sales">Cart</Link>
        </ListItem>
        <ListItem>
          <Link href="/contact/general">Contact</Link>
        </ListItem>
      </List>
    </nav>
  );
};