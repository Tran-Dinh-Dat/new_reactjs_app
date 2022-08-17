import React from "react";

const bgBlue = {
  backgroundColor: "blue",
};

const bgGray = {
  backgroundColor: "gray",
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <>
        {/* footer
  ================================================== */}
        <footer className="s-footer">
          <div className="row">
            <div className="column large-full footer__content">
              <div className="footer__copyright">
                <span>© Copyright Typerite 2019</span>
                <span>
                  Design by <a href="https://www.styleshout.com/">StyleShout</a>
                </span>
              </div>
            </div>
          </div>
          <div className="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top" />
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
