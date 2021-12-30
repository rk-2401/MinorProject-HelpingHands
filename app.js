class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="header">
                <div id="div-logo-name-navbar">
                    <div id="div-logo-name">
                        <div id="div-company-logo"><img id="company-logo" src="/images/Logo.jpg" alt="Company Logo"/></div>
                        <div id="div-company-name"><p id="company-name">HELPING HANDS</p></div>
                    </div>
                    <NavBar/>
                </div>
                <p id="tagline">Bringing Happiness With Maintenance</p>
            </div>
        );
    };
}


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            click:false
        }
    }
    render(){
        if(this.state.click==false)
        return(
            <div id="nav-bar">
               <hr class="nav-line"></hr>
               <hr class="nav-line"></hr>
               <hr class="nav-line"></hr>
            </div>
        );
    };
}

ReactDOM.render(<Header/>,document.getElementById('root'));