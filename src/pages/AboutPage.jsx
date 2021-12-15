import React from "react";
import Image from "../assets/img/aboutImage.jpeg";
import styles from "./styles/AboutPage.module.css";
import stylesBr from "./styles/breadcrumbs.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const AboutPage = () => {
    return (
        <>
            <div className={stylesBr.breadcrumbs_container}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/about">
                        О нас
                    </Link>
                </Breadcrumbs>
            </div>
            <h2 className={styles.h2}>О нас</h2>
            <div className={styles.about_container}>
                <img src={Image} alt="about page" />
                <div className={styles.text}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat, doloribus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsam asperiores eveniet nesciunt accusantium
                        adipisci provident voluptates quos possimus minima
                        aspernatur architecto libero fuga eos a expedita,
                        pariatur vero repellendus unde!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officia nam quia ad mollitia! Labore consequuntur
                        a doloribus mollitia tempore vero commodi nemo libero.
                        Cum, praesentium consequatur dolore quis quas fugiat
                        quod minima ratione voluptate cumque inventore voluptas
                        magni beatae veniam?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam voluptatibus dolorum possimus impedit ab
                        perferendis ipsam, expedita quia consectetur repellat
                        quae soluta minus quas assumenda, et vel molestias.
                        Adipisci, omnis?
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutPage;