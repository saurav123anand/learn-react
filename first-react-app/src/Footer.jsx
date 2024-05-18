function Footer(){
    let year=new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {year} your website name</p>
        </footer>
    )
}
export default Footer;