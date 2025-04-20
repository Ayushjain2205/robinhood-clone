import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer id="navigation-footer" className="bg-[#CBFF00] text-black">
      {/* Top section with links and social media - full width */}
      <div className="border-b border-black/10 py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <Link
              href="https://cdn.robinhood.com/assets/robinhood/legal/RHF%20Customer%20Relationship%20Summary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-black/70 transition-colors mb-2 sm:mb-0"
            >
              Customer Relationship Summaries
            </Link>
            <div className="hidden sm:block mx-2 h-4 w-px bg-black/50"></div>
            <Link
              href="https://brokercheck.finra.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-black/70 transition-colors"
            >
              FINRA's BrokerCheck
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <span className="text-sm mr-4 mb-2 sm:mb-0">Follow us on</span>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/RobinhoodApp"
                aria-label="Robinhood on Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/robinhoodapp"
                aria-label="Robinhood on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/robinhood"
                aria-label="Robinhood on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@robinhoodapp"
                aria-label="Robinhood on TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <svg height="20" viewBox="0 0 21 24" width="20">
                  <path
                    d="M15.072 0h-4.044v16.348c0 1.948-1.556 3.548-3.492 3.548s-3.491-1.6-3.491-3.548c0-1.913 1.52-3.478 3.388-3.548V8.696C3.319 8.766 0 12.139 0 16.348 0 20.59 3.388 24 7.57 24c4.184 0 7.572-3.444 7.572-7.652V7.965A9.366 9.366 0 0020.5 9.774V5.67c-3.042-.105-5.428-2.61-5.428-5.67z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCY55VHsy1umgvR35gl5bmUw"
                aria-label="Robinhood on Youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Product */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Invest
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Strategies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Trading
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Retirement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Gold
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Crypto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Legend
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Options
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Futures
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Banking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Credit Card
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Snacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Commitments
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  ESG
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Investor Index
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Robinhood Merch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory */}
          <div>
            <h3 className="font-bold mb-4">Legal & Regulatory</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Disclosures
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Robinhood Financial Entities US Online Privacy Statement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Robinhood Markets US Online Privacy Statement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Law Enforcement Requests
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="#" className="hover:text-black/70 transition-colors">
                  Your Privacy Choices
                </Link>
                <Image
                  src="https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/privacyoptions__86f2eb97cc1f3909c12e4512de9e267215d94ac5aaee9393d0f007f18c34e8ba.svg"
                  alt="Privacy Options"
                  width={14}
                  height={14}
                  className="ml-2"
                />
              </li>
            </ul>
          </div>

          {/* Column 4: Legal disclaimers */}
          <div className="md:col-span-1">
            <h3 className="font-bold mb-4">All investing involves risk.</h3>

            <p className="text-xs mb-3">
              <strong>Brokerage services</strong> are offered through Robinhood Financial LLC, ("<strong>RHF</strong>")
              a registered broker dealer (member{" "}
              <a href="https://www.sipc.org/" className="hover:text-black/70 transition-colors">
                SIPC
              </a>
              ), and clearing services through Robinhood Securities, LLC, ("<strong>RHS</strong>") a registered broker
              dealer (member{" "}
              <a href="https://www.sipc.org/" className="hover:text-black/70 transition-colors">
                SIPC
              </a>
              ).
            </p>

            <p className="text-xs mb-3">
              <strong>Portfolio Management</strong> offered through Robinhood Asset Management ("Robinhood Strategies"
              or "RAM"), an SEC-registered investment advisor. For additional information about Robinhood Strategies,
              including about services, fees, risks, and conflicts of interest, please see our{" "}
              <a href="#" className="hover:text-black/70 transition-colors">
                firm's brochure
              </a>
              .
            </p>

            <p className="text-xs mb-3">
              <strong>Futures and cleared swaps trading</strong> is offered by Robinhood Derivatives, LLC, ("RHD") a
              registered futures commission merchant with the Commodity Futures Trading Commission (CFTC) and a Member
              of the National Futures Association (NFA). RHD is not FDIC insured or SIPC protected.
            </p>

            <p className="text-xs mb-3">
              <strong>Cryptocurrency services</strong> are offered through an account with Robinhood Crypto, LLC ("RHC")
              (NMLS ID: 1702840). Robinhood Crypto is licensed to engage in virtual currency business activity by the
              New York State Department of Financial Services. Review a list of{" "}
              <a href="#" className="hover:text-black/70 transition-colors">
                RHC's licenses
              </a>{" "}
              for more information. Cryptocurrency held through Robinhood Crypto is not FDIC insured or SIPC protected.
            </p>

            <p className="text-xs mb-3">
              <strong>The Robinhood spending account</strong> is offered through Robinhood Money, LLC ("RHY") (NMLS ID:
              1990968), a licensed money transmitter. Review a{" "}
              <a href="#" className="hover:text-black/70 transition-colors">
                list of our licenses
              </a>{" "}
              for more information.
            </p>

            <p className="text-xs mb-3">
              <strong>The Robinhood Cash Card</strong> is a prepaid card issued by Sutton Bank, Member FDIC, pursuant to
              a license from Mastercard® International Incorporated. Mastercard and the circles design are registered
              trademarks of Mastercard International Incorporated.
            </p>

            <p className="text-xs mb-3">
              <strong>Robinhood Gold Card</strong> is subject to credit approval and underwriting. Robinhood Gold Card
              is offered by Robinhood Credit, Inc., and is issued by Coastal Community Bank, pursuant to a license from
              Visa U.S.A. Inc. Robinhood Credit, Inc. ("RCT"), is a financial technology company, not a bank.
            </p>

            <p className="text-xs mb-3">
              <strong>Robinhood Gold</strong> is a subscription-based membership program of premium services offered
              through Robinhood Gold, LLC ("<strong>RHG</strong>").
            </p>

            <p className="text-xs mb-3">
              RHF, RAM, RHY, RHC, RCT, RHG, RHD, and RHS are affiliated entities and wholly owned subsidiaries of
              Robinhood Markets, Inc. RHF, RAM, RHY, RHC, RCT, RHG, RHD, and RHS are not banks. Investing products
              offered by RHF are not FDIC insured and involve risk, including possible loss of principal.
            </p>

            <p className="text-xs mb-6">RO 4340406</p>

            <p className="text-xs">
              Robinhood, 85 Willow Road, Menlo Park, CA 94025. © 2025 Robinhood. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Robinhood logo at the bottom - full width without container */}
      <div className="w-full">
        <svg fill="currentColor" viewBox="0 0 1440 297" width="100%">
          <path
            d="M293.383 101.379C249.194 101.379 222.117 129.716 222.117 179.522C222.117 229.113 249.194 257.451 293.383 257.451C338.005 257.451 364.432 229.113 364.432 179.522C364.432 129.716 338.005 101.379 293.383 101.379ZM293.383 234.695C265.44 234.695 254.176 211.939 254.176 179.737C254.393 147.105 265.44 124.564 293.383 124.564C321.326 124.564 332.59 147.105 332.59 179.522C332.59 211.724 321.326 234.695 293.383 234.695Z"
            fill="currentColor"
          ></path>
          <path
            d="M174.459 158.911C172.076 158.053 171.21 156.55 171.21 154.618C171.21 153.115 172.509 151.397 174.242 150.324C191.138 142.166 201.319 126.924 201.319 105.885C201.319 68.9606 177.925 46.634 130.92 46.634H49.9062V254.658H81.965V168.787H133.736C158.213 168.787 166.444 179.091 167.094 195.836L170.127 254.658H201.752L198.503 193.689C197.203 173.509 189.189 164.278 174.459 158.911ZM128.753 144.098H81.965V71.9661H128.753C153.014 71.9661 167.96 83.7735 167.96 108.032C167.96 132.506 153.014 144.098 128.753 144.098Z"
            fill="currentColor"
          ></path>
          <path
            d="M1359.77 39.5494V116.405C1359.77 119.41 1358.03 120.913 1355.87 120.913C1354.35 120.913 1353.05 120.054 1351.97 118.766C1351.97 118.766 1351.75 118.551 1351.32 118.551C1340.49 107.173 1328.79 101.377 1310.38 101.377C1277.67 101.377 1251.03 126.28 1251.03 179.52C1251.03 232.761 1277.67 257.449 1310.38 257.449C1329.44 257.449 1342.22 251.223 1352.84 238.772L1353.49 238.128C1354.79 236.84 1355.87 235.981 1357.38 235.981C1359.55 235.981 1361.28 237.484 1361.28 240.489V254.658H1390.09V39.5494H1359.77ZM1321.86 234.693C1293.92 234.693 1282.65 211.937 1282.65 179.735C1282.65 147.318 1293.92 124.777 1321.86 124.777C1350.02 124.777 1361.07 147.318 1361.07 179.735C1361.07 211.722 1350.02 234.693 1321.86 234.693Z"
            fill="currentColor"
          ></path>
          <path
            d="M698.242 101.379C676.364 101.379 663.584 111.254 654.053 123.92C652.753 125.423 651.67 126.926 649.504 126.926C647.338 126.926 645.605 125.423 645.605 122.417V104.384H617.012V254.66H647.338V171.794C647.338 144.959 661.851 125.852 684.595 125.852C706.04 125.852 716.654 138.089 716.654 164.709V254.875H746.98V156.766C746.98 122.203 731.167 101.379 698.242 101.379Z"
            fill="currentColor"
          ></path>
          <path
            d="M860.269 101.377C839.907 101.377 826.694 110.394 817.813 121.772C816.513 123.274 815.43 124.777 813.264 124.777C811.098 124.777 809.365 123.274 809.365 120.269V39.5494H779.039V254.658H809.365V171.792C809.365 144.957 823.878 125.85 846.622 125.85C868.067 125.85 878.681 138.087 878.681 164.707V254.873H909.007V156.764C909.007 122.201 893.194 101.377 860.269 101.377Z"
            fill="currentColor"
          ></path>
          <path
            d="M1003.66 101.379C959.467 101.379 932.391 129.716 932.391 179.522C932.391 229.113 959.467 257.451 1003.66 257.451C1048.28 257.451 1074.71 229.113 1074.71 179.522C1074.49 129.716 1048.28 101.379 1003.66 101.379ZM1003.66 234.695C975.713 234.695 964.449 211.939 964.449 179.737C964.449 147.32 975.713 124.779 1003.66 124.779C1031.6 124.779 1042.86 147.32 1042.86 179.737C1042.65 211.724 1031.6 234.695 1003.66 234.695Z"
            fill="currentColor"
          ></path>
          <path
            d="M1162.66 101.379C1118.48 101.379 1091.4 129.716 1091.4 179.522C1091.4 229.113 1118.48 257.451 1162.66 257.451C1207.29 257.451 1233.71 229.113 1233.71 179.522C1233.71 129.716 1207.29 101.379 1162.66 101.379ZM1162.66 234.695C1134.72 234.695 1123.46 211.939 1123.46 179.737C1123.46 147.32 1134.72 124.779 1162.66 124.779C1190.61 124.779 1201.87 147.32 1201.87 179.737C1201.87 211.724 1190.61 234.695 1162.66 234.695Z"
            fill="currentColor"
          ></path>
          <path d="M584.093 104.386H553.768V254.662H584.093V104.386Z" fill="currentColor"></path>
          <path d="M584.941 39.5494H552.449V73.8981H584.941V39.5494Z" fill="currentColor"></path>
          <path
            d="M469.057 101.377C450.212 101.377 438.732 107.173 428.117 118.122L427.468 118.766C426.168 120.054 425.085 120.913 423.569 120.913C421.402 120.913 419.67 119.41 419.67 116.405V39.5494H389.344V254.658H417.937V240.489C417.937 237.484 419.67 235.981 421.836 235.981C423.352 235.981 424.652 236.84 425.735 238.128L426.385 238.772C437.215 251.009 449.779 257.449 469.057 257.449C501.549 257.449 528.193 232.761 528.193 179.52C528.193 126.494 501.549 101.377 469.057 101.377ZM457.36 234.693C429.417 234.693 418.153 211.937 418.153 179.735C418.153 147.318 429.417 124.777 457.36 124.777C485.303 124.777 496.567 147.318 496.567 179.735C496.351 211.722 485.087 234.693 457.36 234.693Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </footer>
  )
}
