import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

import Sale from "../../assets/img/discount.png";
import Hit from "../../assets/img/hot.png";

import styles from "./Card.module.css";

import { add, exists } from "cart-localstorage";

const ItemCard = ({ item }) => {
    const [inCart, setInCart] = useState(exists(item.id));
    const navigate = useNavigate();

    const handleClick = (idc) => {
        navigate(`sub/item/${idc}/`);
    };

    const handleAdToCart = (e, item) => {
        e.preventDefault();
        add(item);
        setInCart(!inCart);
    };

    const handleRemoveFromCart = (e, item) => {
        e.preventDefault();
        add(item.id);
        setInCart(!inCart);
    };

    return (
        <Card sx={{ width: 250, m: 1, p: 0 }}>
            {item.hit ? (
                <img
                    className={styles.sale}
                    src={Sale}
                    alt="sale"
                    height="50"
                />
            ) : null}
            {item.sale ? (
                <img className={styles.hit} src={Hit} alt="hit" height="50" />
            ) : null}

            <CardMedia
                onClick={() => handleClick(item.id)}
                component="img"
                height="200"
                image={item.image}
                alt="categories"
            />

            <CardContent>
                <Typography
                    onClick={() => handleClick(item.id)}
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    {item.name}
                </Typography>

                {item.hit ? (
                    <Typography
                        onClick={() => handleClick(item.id)}
                        gutterBottom
                        variant="h6"
                        color="red"
                        component="div"
                    >
                        ХИТ ПРОДАЖ!
                    </Typography>
                ) : null}
                <Typography
                    onClick={() => handleClick(item.id)}
                    gutterBottom
                    variant="h6"
                    component="div"
                >
                    {item.price} Сом
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
                <Button onClick={() => handleClick(item.id)} size="small">
                    Подробнее
                </Button>
                {!inCart ? (
                    <AddShoppingCartOutlinedIcon
                        onClick={(e) => handleAdToCart(e, item)}
                    />
                ) : (
                    <RemoveShoppingCartOutlinedIcon
                        color="error"
                        onClick={(e) => handleRemoveFromCart(e, item)}
                    />
                )}
            </CardActions>
        </Card>
    );
};

export default ItemCard;
