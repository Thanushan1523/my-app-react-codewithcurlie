import styles from "./Header.module.css"

function Header(){
    return(
        <header >
            <div className={styles.Header}><h1>OUR WEBSITE</h1></div>
            
            <nav>
                <ul>
                    <li><a href= "#" > Home </a></li>
                    <li><a href= "#" >About</a></li>
                    <li><a href= "#" >Services </a></li>
                    <li><a href= "#" >Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>

    );

}
export default Header;