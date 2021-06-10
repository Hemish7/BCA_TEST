var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Test() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobileNav = _React$useState2[0],
      setMobileNav = _React$useState2[1];

  var _React$useState3 = React.useState('navbar'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      navClass = _React$useState4[0],
      setNavClass = _React$useState4[1];

  var _React$useState5 = React.useState('bi bi-list mobile-nav-toggle'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      menuClass = _React$useState6[0],
      setMenuClass = _React$useState6[1];
  // const [activeClass, setActiveClass] = React.useState('home');
  //bi mobile-nav-toggle bi-x


  function toggleMobileNav() {
    if (mobileNav) {
      setNavClass('navbar');
      setMobileNav(false);
      setMenuClass('bi bi-list mobile-nav-toggle');
    } else {
      setNavClass('navbar navbar-mobile');
      setMobileNav(true);
      setMenuClass('bi mobile-nav-toggle bi-x');
    }
  }

  return React.createElement(
    'div',
    null,
    React.createElement(
      'section',
      { id: 'topbar', 'class': 'd-flex align-items-center' },
      React.createElement(
        'div',
        { 'class': 'container d-flex justify-content-center justify-content-md-between' },
        React.createElement(
          'div',
          { 'class': 'contact-info d-flex align-items-center' },
          React.createElement(
            'i',
            { 'class': 'bi bi-envelope d-flex align-items-center' },
            React.createElement(
              'a',
              { href: 'mailto:contact@example.com' },
              'contact@example.com'
            )
          ),
          React.createElement(
            'i',
            { 'class': 'bi bi-phone d-flex align-items-center ms-4' },
            React.createElement(
              'span',
              null,
              '+1 5589 55488 55'
            )
          )
        ),
        React.createElement(
          'div',
          { 'class': 'cta d-none d-md-flex align-items-center' },
          React.createElement(
            'a',
            { href: '#about', 'class': 'scrollto' },
            'Get Started'
          )
        )
      )
    ),
    React.createElement(
      'header',
      { id: 'header', 'class': 'd-flex align-items-center' },
      React.createElement(
        'div',
        { 'class': 'container d-flex align-items-center justify-content-between' },
        React.createElement(
          'div',
          { 'class': 'logo' },
          React.createElement(
            'h1',
            null,
            React.createElement(
              'a',
              { href: 'index.html' },
              'Flexor'
            )
          )
        ),
        React.createElement(
          'nav',
          { id: 'navbar', className: navClass },
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: 'index.html' },
                'Home'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: 'about.html' },
                'About'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: 'blog.html' },
                'Services'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 'class': 'nav-link scrollto ', href: '#portfolio' },
                'Portfolio'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 'class': 'nav-link scrollto', href: '#team' },
                'Team'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 'class': 'nav-link scrollto', href: '#pricing' },
                'Pricing'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: 'blog.html' },
                'Blog'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 'class': 'nav-link scrollto', href: '#contact' },
                'Contact'
              )
            )
          ),
          React.createElement('i', { onClick: toggleMobileNav, 'class': menuClass })
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Test, null), document.getElementById('root'));
// onClick={()=>setActiveClass('home')} class={activeClass === 'home'?'active':'nav-link scrollto'}