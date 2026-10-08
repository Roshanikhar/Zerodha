import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col ">
            <img src="media/logo.svg" style={{ width: "50%" }} alt="Logo" />
            <p className="mt-3">
              &copy; 2010 - 2024 ,Not Zerodha Broking Ltd. All rights reserved.
              <br />
            </p>

            <div class="social-icons" style={{ width: "50%" }}>
              <a href="https://twitter.com" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me" target="_blank">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <p>Company</p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              About
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Products
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Pricing
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Referral programme
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Careers
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Zerodha.tech
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Press & media
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Zerodha cares (CSR){" "}
            </a>
          </div>
          <div className="col">
            <p>Support</p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Contact
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Support portal
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Z-Connect blog
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              List of charges
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Downloads & resources
            </a>
          </div>
          <div className="col">
            <p>Account</p>
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Open an account
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              Fund transfer
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none" }}
              class="nav-link active"
            >
              60 day challenge
            </a>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "16px" }}>
          <p>
            Zerodha Broking Ltd. is a member of NSE and BSE with SEBI
            Registration no. INZ000031633. Depository services are provided
            through Zerodha Securities Pvt. Ltd. under SEBI Registration no.
            IN-DP-100-2015. Commodity trading is offered via Zerodha Commodities
            Pvt. Ltd. with MCX membership no. 46025 and SEBI Registration no.
            INZ000038238. The registered address is #153/154, 4th Cross, Dollars
            Colony, Opposite Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru – 560078, Karnataka, India. Complaints related to
            securities broking can be sent to complaints@zerodha.com, while
            DP-related issues should be directed to dp@zerodha.com. Investors
            are advised to carefully read the Disclosure Document as prescribed
            by SEBI and ICF.
          </p>
          <p>
            To file a complaint, investors must register on the SCORES portal.
            The mandatory details required for filing complaints include Name,
            PAN, Address, Mobile Number, and E-mail ID. The benefits of using
            SCORES are effective communication and speedy redressal of
            grievances.
          </p>
          <p>
            Investments in the securities market are subject to market risks;
            investors are advised to read all related documents carefully before
            investing.
          </p>
          <p>
            Preventing unauthorized transactions by updating mobile numbers and
            email IDs with stock brokers. Transaction details are sent directly
            from the exchange to investors’ mobile or email at the end of the
            day. KYC is a one-time exercise; once completed with a
            SEBI-registered intermediary such as a broker, DP, or mutual fund,
            it does not need to be repeated with other intermediaries. For IPO
            subscriptions, investors do not need to issue cheques; instead, they
            provide their account number and sign the application form to
            authorize debit in case of allotment. If allotment does not occur,
            funds are returned to the account. Zerodha clarifies that it does
            not provide stock tips or authorize anyone to trade on behalf of
            others. If someone claims to represent Zerodha services, investors
            are advised to create a support ticket.
          </p>
        </div>
      </div>
 <div class="container">
  <div class="row d-flex justify-content-center">
    <div class="col-auto"><a href="#">NSC</a></div>
    <div class="col-auto"><a href="#">BSC</a></div>
    <div class="col-auto"><a href="#">MSX</a></div>
    <div class="col-auto"><a href="#">Term and Conditions</a></div>
    <div class="col-auto"><a href="#">Policy & Producer</a></div>
    <div class="col-auto"><a href="#">Disclosure</a></div>
  </div>
</div>

    </footer>
  );
}

export default Footer;
