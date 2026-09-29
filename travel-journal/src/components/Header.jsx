import globeIcon from "../assets/globe.png"

export function Header(){

    return(
        <header>
        <img className="icon" src={globeIcon} alt="Globe icon" />
        <span>my travel journal</span>
        </header>
    );
}