function Hello() {

  return React.createElement(
    "div",
    null,
    React.createElement(
      "footer",
      { id: "footer" },
      React.createElement(
        "div",
        { "class": "footer-top" },
        React.createElement(
          "div",
          { "class": "container" },
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "div",
              { "class": "col-lg-3 col-md-6 footer-contact" },
              React.createElement(
                "h3",
                null,
                "Flexor"
              ),
              React.createElement(
                "p",
                null,
                "A108 Adam Street ",
                React.createElement("br", null),
                "New York, NY 535022",
                React.createElement("br", null),
                "United States ",
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                  "strong",
                  null,
                  "Phone:"
                ),
                " +1 5589 55488 55",
                React.createElement("br", null),
                React.createElement(
                  "strong",
                  null,
                  "Email:"
                ),
                " info@example.com",
                React.createElement("br", null)
              )
            ),
            React.createElement(
              "div",
              { "class": "col-lg-2 col-md-6 footer-links" },
              React.createElement(
                "h4",
                null,
                "Useful Links"
              ),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Home"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "About us"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Services"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Terms of service"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Privacy policy"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "col-lg-3 col-md-6 footer-links" },
              React.createElement(
                "h4",
                null,
                "Our Services"
              ),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Web Design"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Web Development"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Product Management"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Marketing"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("i", { "class": "bx bx-chevron-right" }),
                  " ",
                  React.createElement(
                    "a",
                    { href: "#" },
                    "Graphic Design"
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { "class": "container d-lg-flex py-4" },
        React.createElement(
          "div",
          { "class": "me-lg-auto text-center text-lg-start" },
          React.createElement(
            "div",
            { "class": "copyright" },
            "\xA9 Copyright ",
            React.createElement(
              "strong",
              null,
              React.createElement(
                "span",
                null,
                "Flexor"
              )
            ),
            ". All Rights Reserved"
          )
        ),
        React.createElement(
          "div",
          { "class": "social-links text-center text-lg-right pt-3 pt-lg-0" },
          React.createElement(
            "a",
            { href: "#", "class": "twitter" },
            React.createElement("i", { "class": "bx bxl-twitter" })
          ),
          React.createElement(
            "a",
            { href: "#", "class": "facebook" },
            React.createElement("i", { "class": "bx bxl-facebook" })
          ),
          React.createElement(
            "a",
            { href: "#", "class": "instagram" },
            React.createElement("i", { "class": "bx bxl-instagram" })
          ),
          React.createElement(
            "a",
            { href: "#", "class": "google-plus" },
            React.createElement("i", { "class": "bx bxl-skype" })
          ),
          React.createElement(
            "a",
            { href: "#", "class": "linkedin" },
            React.createElement("i", { "class": "bx bxl-linkedin" })
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Hello, null), document.getElementById('foot'));