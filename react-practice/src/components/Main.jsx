import reactLogo from "../assets/react-logo.png"

export function Main(){
    return (
       <>
       <main>
       <h1>Fun facts about React</h1>
       <ul className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
       </ul>

       <img className="background-logo" src={reactLogo} alt="react bg logo" />
       </main>
       </>
    );
}




