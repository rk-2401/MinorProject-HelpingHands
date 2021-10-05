class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="header">
                <div id="div-logo-name-header">
                    <div id="menu-btn">
                        <hr className="menu-btn-line"></hr>
                        <hr className="menu-btn-line"></hr>
                        <hr className="menu-btn-line"></hr>
                    </div>
                    <div id="div-logo-name">
                        <div id="div-company-logo"><img id="company-logo" src="/images/Logo.jpg" alt="Company Logo"/></div>
                        <div id="div-company-name"><p id="company-name">Helping Hands</p></div>
                    </div>
                    <User/>
                </div>
            </div>
        );
    };
}


class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login:false,
            username:'Rachit'
        }
    }
    render(){
        if(this.state.login==true)
        return(
            <div id="user">
                <div id="username">
                    <i id="user-icon" className="fa fa-user" aria-hidden="true"></i>
                    {this.state.username}
                </div>
            </div>
        );
        else
        return(
            <div id="user">
                <button type="button" className="login-btn">Login / Sign Up</button>
            </div>
        );
    };
}

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
            <div id="carousel">
                <div><i id="carousel-arrow-l" className="fas fa-angle-left carousel-arrow"></i></div>
                <div><i id="carousel-arrow-r" className="fas fa-angle-right carousel-arrow"></i></div>
            </div>
        );
    };
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div id="div-tagline"><p id="tagline">Bringing Happiness With Maintenance</p></div>
                <Carousel/>
            </div>
        );
    };
}

ReactDOM.render(<App/>,document.getElementById('root'));