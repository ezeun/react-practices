import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from '../assets/scss/component/Guestbook.scss';


export default function About() {
    return (
        <>
            <Header/>
            <div className={styles.About}>
                <h2>About</h2>
            </div>
            <Navigation/>
            <Footer/>
        </>
    );
}