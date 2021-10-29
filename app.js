class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="header">
                <div id="div-logo-name-header">
                    <Navbar/>
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

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
           btn:false
        }
        this.navbar=this.navbar.bind(this);
    }
    navbar=()=>{
        if(this.state.btn==true)
            this.setState({btn:false});
        else
        this.setState({btn:true});
    }
    
    render(){
        if(this.state.btn==false)
        return(
            <div id="menu-btn" onClick={this.navbar}>
                <hr className="menu-btn-line"></hr>
                <hr className="menu-btn-line"></hr>
                <hr className="menu-btn-line"></hr>
            </div>
        );
        else
        return(
            <div>
                <div id="menu-btn-navbar" onClick={this.navbar}>
                    <hr className="menu-btn-line"></hr>
                    <hr className="menu-btn-line"></hr>
                    <hr className="menu-btn-line"></hr>
                </div>
            <div id="nav-bar" className="col">
                
                <div id="home-opt" className="navbar-options"><a href="#header" onClick="navbar()">Home</a></div>
                <hr/>
                <div id="services-opt" className="navbar-options"><a href="#services">Services</a></div>
                <hr/>
                <div id="about-opt" className="navbar-options"><a href="#footer">About</a></div>
                <hr/>
                <div id="contact-opt" className="navbar-options"><a href="#footer">Contact us</a></div>
                
            </div>
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
            <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators" >
              <button id="slide1" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button id="slide2" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" >
                <img src="/images/CarWash.png" className="d-block w-100" alt="..."/>
                <div id="carousel-caption" className="carousel-caption d-none d-md-block">
                  <h5>Car Washing <br/> At Your Doorstep</h5>
                </div>
              </div>
              <div className="carousel-item" >
                <img src="/images/sofa.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                </div>
              </div>
              <div className="carousel-item" >
                <img src="/images/sofa4.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button id="next-slide" className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        );
    };
}

class Services extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="services" className="container-fluid Service-container ">
<div><h1 id="services-heading" >Our Services</h1></div>
<div className="row row-cols-1 row-cols-md-3 g-4 services">
  <div className="col">
    <div className="card">
      <img src="/images/CarWashTile.png" className="card-img-top" alt="s"/>
      <div className="card-body">
        <h4 className="card-title" id="car-washing">Car Washing</h4>
        <button type="button" className="btn btn-warning">Book Service</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/WaterTankTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Water Tank Cleaning</h4>
        <button type="button" className="btn btn-warning">Book Service</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/SofaTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Sofa Cleaning</h4>
        <button type="button" className="btn btn-warning">Book Service</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/TileWashTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Tile Cleaning</h4>
        <button type="button" className="btn btn-warning">Book Service</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/SanitizationTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title" id="sanitization">Sanitization</h4>
        <button type="button" className="btn btn-warning">Book Service</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/OthersTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Other Services</h4>
        <button type="button" className="btn btn-warning">Book Service</button>
      </div>
    </div>
  </div>
</div>
</div>
        );
    };
}

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
            <div id="footer" className="Col">
                <div><hr/></div>
                <div className="row-se">
                    <div className="media-icons">
                        Support us :<br/>
                        <a href="https://www.instagram.com/helpinghands9903/" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a><i className="fab fa-facebook"></i></a>
                        <a><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="ph-no">Call us : +91 7302742324<br/>+91 7302842324</div>
                </div>
                <div><hr id="footer-hr2"/></div>
                <div className="row-centre">
                    <div className="company-info">
                        <div><img src="/images/Logo.jpg"/></div>
                        <div><i className="far fa-copyright"> 2021</i></div>
                        <div>Helping Hands, Inc. All rights reserved.</div>
                    </div>
                </div>
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
                <Services/>
                <Footer/>
            </div>
        );
    };
}

ReactDOM.render(<App/>,document.getElementById('root'));