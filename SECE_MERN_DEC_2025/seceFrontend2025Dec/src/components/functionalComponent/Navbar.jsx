import "../../css/App.css"
import Props from "./Props.jsx";

function Navbar(props){
    return(
        <>
            <nav style={{backgroundColor:"black",color:"aqua"}}>
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Learning React</li>
                    <ol>
                        <li><Props/></li>
                        <li>hello</li>
                    </ol>
                    <li>Contact</li>
                </ul>

            </nav>
            <p>The above content is Navbar </p>
        </>
    );
}
export default Navbar;