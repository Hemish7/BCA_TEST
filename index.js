

function Test() {
  
  const [mobileNav, setMobileNav]=React.useState(false);
  const [navClass, setNavClass] = React.useState('navbar');
  const [menuClass, setMenuClass] = React.useState('bi bi-list mobile-nav-toggle');
  // const [activeClass, setActiveClass] = React.useState('home');
  //bi mobile-nav-toggle bi-x
  
 
  function toggleMobileNav () {
    if(!mobileNav) {
      setNavClass('navbar');
      setMobileNav(false);
      setMenuClass('bi bi-list mobile-nav-toggle');
    } else {
      setNavClass('navbar navbar-mobile');
      setMobileNav(true);
      setMenuClass('bi mobile-nav-toggle bi-x');
    }
  }

  return(
    <div>
       
       <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>

      <div class="cta d-none d-md-flex align-items-center">
        <a href="#about" class="scrollto">Get Started</a>
      </div>
    </div>
  </section>
  
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1><a href="index.html">Flexor</a></h1>
        
      </div>


      <nav id="navbar" className={navClass}>
        <ul>
          <li><a  href="index.html">Home</a></li>
          <li><a  href="about.html">About</a></li>
          <li ><a href="blog.html">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li><a href="blog.html">Blog</a></li>
          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i onClick={toggleMobileNav} class={menuClass}></i>
      </nav>

    </div>
  </header>
  
 </div>
  
)
}


ReactDOM.render(<Test/>, document.getElementById('root'));
// onClick={()=>setActiveClass('home')} class={activeClass === 'home'?'active':'nav-link scrollto'}
