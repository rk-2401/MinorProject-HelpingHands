var service_charges={
  "car-washing":{
    "basic":300,
    "deluxe":500,
    "premium":800
  },
  "water-tank-cleaning":300,
  "sofa-cleaning":250,
  "sanitization":100
}
var total=0;
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
                    <User admin_login={this.props.admin_login}/>
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
            username:'',
            login_form:false,
            signup_form:false,
        }
        this.login=this.login.bind(this);
        this.loginForm=this.loginForm.bind(this);
        this.signupForm=this.signupForm.bind(this);
        this.close=this.close.bind(this);
        this.adminLoginForm=this.adminLoginForm.bind(this);
    }
    login(usr){
      this.setState({login:true});
      this.setState({username:usr});
      this.props.admin_login();
    }
    close(){
      this.setState({admin_login:false});
      this.setState({login_form:false});
      this.setState({signup_form:false});
    }
    adminLoginForm(){
      this.setState({login_form:false});
      this.setState({signup_form:false});
      this.setState({admin_login:true});
    }
    signupForm(){
      this.setState({login_form:false});
      this.setState({signup_form:true});
    }
    loginForm(){
      this.setState({login_form:true});
      this.setState({signup_form:false});
    }
    render(){
      if(this.state.admin_login==true)
      return(
        <AdminLoginForm close={this.close} login={this.login}/>
      );
        else if(this.state.login_form==true)
        return(
          <LoginForm close={this.close} signupForm={this.signupForm} adminLoginForm={this.adminLoginForm}/>
        );
        else if(this.state.signup_form==true)
        return(
          <SignupForm close={this.close} loginForm={this.loginForm}/>
        );
        if(this.state.login==true)
        return(
          <div id="user">
                <div id="username" >
                    <i id="user-icon" className="fa fa-user" aria-hidden="true"></i>
                    {this.state.username}
                </div>
            </div>
        )
        else
        return(
            <div id="user">
                <button type="button" className="login-btn" onClick={this.loginForm}>Login / Sign Up</button>
            </div>
        );
    };
}

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
       signup:false,
       login:false
    }
  }
  
  render(){
    return(
      <div className="form-div">
        
        <form className="form">
          <i className="fa fa-times" onClick={this.props.close}></i> 
          <h1 id="login-heading">Login</h1>
          <br/>
          <input className="login-input" type="text" placeholder="Mobile no. / Email" required></input>
          <br/><br/>
          <input className="login-input" type="password" placeholder="Password" required></input>
          <br/><br/>
          
          <button type="submit" id="submit">Submit</button>
          <button className="obtn-form" onClick={this.props.signupForm}>Sign Up</button>
          <br/>
          
          <a className="hypertext" onClick={this.props.adminLoginForm}>Admin Login</a>
        </form>
      </div>
    );
  }
}

class AdminLoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
       
    }
    this.login=this.login.bind(this);
  }
  login(){
    this.props.login("Rachit");
    this.props.close();
  }
  render(){
    return(
      <div className="form-div">
        
        <form className="form">
          <i className="fa fa-times" onClick={this.props.close}></i> 
          <h1 id="login-heading">Admin Login</h1>
          <br/>
          <input className="login-input" type="text" placeholder="Mobile no. / Email" required></input>
          <br/><br/>
          <input className="login-input" type="password" placeholder="Password" required></input>
          <br/><br/>
          
          <button type="submit" id="submit" onClick={this.login}>Submit</button>
          <br/>
        </form>
      </div>
    );
  }
}

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
       signup:false,
       login:false
    }
  }
  
  render(){
    return(
      <div className="form-div" method="post" action="http://localhost:3000">
        
        <form id="signup-form" >
          <i className="fa fa-times" onClick={this.props.close}></i> 
          <h1 id="signup-heading">Sign-Up</h1>
          <br/>
          <label >*Name
            <input type="text" name="name" required></input>
          </label>
          <br/><br/>
          <label htmlFor="mobno">*Mobile No.
          <input type="text" name="mobno" required></input>
          </label>
          <br/><br/>
          <label htmlFor="email">&nbsp;&nbsp;Email
          <input type="email" name="email" ></input>
          </label>
          <br/><br/>
          <label htmlFor="address">&nbsp;&nbsp;Address
          <input type="text" name="address" ></input>
          </label>
          <br/><br/>
          <label htmlFor="password">*Password
          <input type="password" name="password"  required></input>
          </label>
          <br/><br/>
          <button type="submit" id="submit">Submit</button>
          <button className="obtn-form" onClick={this.props.loginForm}>Login</button>
        </form>
      </div>
    );
  }
}

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
           btn:false
        }
        this.navbar=this.navbar.bind(this);
    }
    navbar(){
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
                <Menubar navbar={this.navbar}/>
            </div>
        );
    };
  }

  class Menubar extends React.Component{
    constructor(props){
        super(props);
        this.state={  
        }
    }
    
    render(){
        return(
              <div id="nav-bar" className="col">
                
                <div id="home-opt" className="navbar-options"><a href="#header">Home</a></div>
                <hr/>
                <div id="services-opt" className="navbar-options"><a href="#services">Services</a></div>
                <hr/>
                <div id="about-opt" className="navbar-options"><a href="#footer">About</a></div>
                <hr/>
                <div id="contact-opt" className="navbar-options"><a href="#footer">Contact us</a></div>
                
              </div>
        );
    }
    componentDidMount() {
      document.getElementById("root").addEventListener('click', this.props.navbar);
      
      document.addEventListener('keydown', this.props.navbar);
    }
    componentWillUnmount() {
      document.getElementById("root").removeEventListener('click', this.props.navbar);
      document.removeEventListener('keydown', this.props.navbar);
    }
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
                  <h5>Get Your Sofa Cleaned<br/>Like You Bought a New One!</h5>
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
class AdminDashboard extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div id="adm-db" className="Col">
        <div><p>Admin Dashboard</p></div>
        <div className="row-se">
          <div><button type="button">Bookings Today</button></div>
          <div><button type="button">New Bookings</button></div>
          <div><button type="button">All Pending Bookings</button></div>
          <div><button type="button">Completed Bookings</button></div>
        </div>
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
            <div id="services" className="container-fluid Service-container">
<div><h1 id="services-heading" >Our Services</h1></div>
<div className="row row-cols-1 row-cols-md-3 g-4 services">
  <div className="col">
    <div className="card">
      <img src="/images/CarWashTile.png" className="card-img-top" alt="s"/>
      <div className="card-body">
        <h4 className="card-title" id="car-washing">Car Washing</h4>
        <a href="#booking-form-div"><button type="button" className="btn btn-warning" onClick={this.props.openForm}>Book Service</button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/WaterTankTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Water Tank Cleaning</h4>
        <a href="#booking-form-div"><button type="button" className="btn btn-warning" onClick={this.props.openForm}>Book Service</button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/SofaTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Sofa Cleaning</h4>
        <a href="#booking-form-div"><button type="button" className="btn btn-warning" onClick={this.props.openForm}>Book Service</button></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/SanitizationTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title" id="sanitization">Sanitization</h4>
        <button type="button" className="btn btn-warning" onClick={this.props.openForm}>Book Service</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/images/TileWashTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Tile Cleaning</h4>
        <button type="button" className="btn btn-warning" onClick={()=>{alert("Coming Soon...")}}>Book Service</button>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card">
      <img src="/images/OthersTile.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Other Services</h4>
        <button type="button" className="btn btn-warning" onClick={()=>{alert("Coming Soon...")}}>Book Service</button>
      </div>
    </div>
  </div>
</div>
</div>
        );
    };
}

class BookingForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tot:0
    } 
    this.calcTotal=this.calcTotal.bind(this);
  }
  calcTotal(){
    total=0;
    if(document.getElementById("cw-serv").checked==true && document.getElementById("cw-menu").value=="none")
    {
      alert("Select atleast one category of Car Washing or uncheck the service!");
    }
    else if(document.getElementById("cw-serv").checked==true)
    {
      total+=service_charges["car-washing"][document.getElementById("cw-menu").value.toString()]*document.getElementById("cars").value;
      
    }
    if(document.getElementById("wtc-serv").checked==true)
    {
      total+=service_charges["water-tank-cleaning"]*document.getElementById("tanks").value;
    }
    if(document.getElementById("sc-serv").checked==true)
    {
      total+=service_charges["sofa-cleaning"]*document.getElementById("seats").value;
    }
    if(document.getElementById("snt-serv").checked==true)
    {
      total+=service_charges["sanitization"]*(document.getElementById("area").value/10);
    } 
    this.setState({tot:total});
  }
  render(){
    return(
      <div id="booking-form-div">
        
        <form id="booking-form">
          <i className="fa fa-times" onClick={this.props.close}></i> 
          <h1 id="booking-heading">Booking Details</h1>
          <br/>
          <p>Services to be booked:</p>
          <input type="checkbox" id="cw-serv"/>&nbsp;Car Washing
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No. of cars&nbsp;<input id="cars" className="quantity" type="number" defaultValue="1"/>
          <br/>
          
            <select name="car washing" id="cw-menu">
              <option value="none">Select a category</option>
              <option value="basic">Basic Car Washing Rs{service_charges["car-washing"]["basic"]}&nbsp;/car</option>
              <option value="deluxe">Deluxe Car Washing Rs{service_charges["car-washing"]["deluxe"]}&nbsp;/car</option>
              <option value="premium">Premium Car Washing Rs{service_charges["car-washing"]["premium"]}&nbsp;/car</option>
            </select>
            
          <br/><br/>

          <input type="checkbox" id="wtc-serv" value={service_charges["water-tank-cleaning"]}/>&nbsp;Water Tank Cleaning&nbsp;Rs{service_charges["water-tank-cleaning"]}/tank(500L)
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No. of tanks&nbsp;<input id="tanks" className="quantity" type="number" defaultValue="1"/>
          <br/><br/>

          <input type="checkbox" id="sc-serv" value={service_charges["sofa-cleaning"]}/>&nbsp;Sofa Cleaning&nbsp;Rs{service_charges["sofa-cleaning"]}/seat
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No. of seats&nbsp;<input id="seats" className="quantity" type="number" defaultValue="1"/>
          <br/><br/>

          <input  type="checkbox" id="snt-serv" value={service_charges["sanitization"]}/>&nbsp;Sanitization&nbsp;Rs{service_charges["sanitization"]} per 10sq.mtr
          &nbsp;&nbsp;&nbsp;&nbsp;Approx. area<input id="area" className="quantity" type="number" defaultValue="10"/>
          <br/><br/>

          <input  type="text" placeholder="*Mobile no." required></input>
          <br/><br/>

          <input type="date" id="datePicker"/>&nbsp;<input type="time"/>
          <br/><br/>
          <textarea type="textbox" placeholder="*Address" required></textarea>
          <br/><br/>
          <button type="button" onClick={this.calcTotal}>Total :</button> Rs &nbsp; {this.state.tot}&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit" id="submit">Confirm Booking</button>

          <br/>
        </form>
      </div>
    );
  }
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
          adm_login:false,
          booking_form:false
        }
        this.openForm=this.openForm.bind(this);
        this.close=this.close.bind(this);
        this.admin_login=this.admin_login.bind(this);
    }
  admin_login(){
    this.setState({adm_login:true});
  }
  close(){
    this.setState({booking_form:false});
  }
    openForm(){
      this.setState({booking_form:true});
    }
    render(){
      if(this.state.adm_login==true)
      return(
            <div>
              <Header/>
              <div id="div-tagline"><p id="tagline">Bringing Happiness With Maintenance</p></div>
              <AdminDashboard/>
              <Services openForm={this.openForm}/>
              <Footer/>
            </div>
      );
      else if(this.state.booking_form==true)
        return(
            <div>
                <Header/>
                <div id="div-tagline"><p id="tagline">Bringing Happiness With Maintenance</p></div>
                <Carousel/>
                <BookingForm close={this.close}/>
                <Services openForm={this.openForm} />
                <Footer/>
            </div>
        );
      else return(
          <div>
                <Header admin_login={this.admin_login}/>
                <div id="div-tagline"><p id="tagline">Bringing Happiness With Maintenance</p></div>
                <Carousel/>
                <Services openForm={this.openForm}/>
                <Footer/>
          </div>
        );
    };
}

ReactDOM.render(<App/>,document.getElementById('root'));