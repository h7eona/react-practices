import React from 'react';
import * as styles from './assets/scss/Header.scss';

function Header(props) {
    return (
        <div>
            <h1 className={styles.Header}>SASS & SCSS</h1>
        </div>
    );
}

export default Header;