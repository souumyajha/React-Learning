import reactLogo from "../assets/react-logo.png"

function Header(){
   return(
    <>
    
    </>
   );
}

export function Navbar(){
    return (
        <>
        <header>
            <nav>
                <img src={reactLogo} alt="react logo" />
                <span>React Facts</span>
            </nav>
        </header>
        </>
    );
}