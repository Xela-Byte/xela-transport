import {
  TemplateBtn,
  TemplateContainer,
  TemplateContent,
  TemplateCustomerContent,
  TemplateCustomerTab,
  TemplateServiceContent,
  TemplateServiceTab,
  TemplateSetContent,
  TemplateSetTab,
  TemplateSetTabContainer,
  TemplateSetTabContent,
  TemplateSetTabHeader,
  TemplateSetTabSubContent,
  TemplateSpeakContent,
} from "../styled/Template";
import Ship from "../assets/home-bg.jpg";
import { Link } from "react-router-dom";
import Rating from "../assets/rating.png";
import CheckList from "../assets/checklist.png";
import CustomerService from "../assets/customer-service.png";
import TeamFlag from "../assets/team-flag.png";
import WareHouse from "../assets/warehouse.png";
import Tracking from "../assets/tracking.png";
import HandShake from "../assets/handshake.png";

const Template = () => {
  document.title = "XelaExports | Drop Trailer";
  return (
    <TemplateContainer>
      <TemplateContent>
        <img src={Ship} alt="" />
        <div className="subContent">
          <p>DROP TRAILER</p>
          <p>COMPREHENSIVE.</p>
          <p>ACCOUNTABLE. PROACTIVE.</p>
        </div>
        <TemplateBtn>Connect with Expert</TemplateBtn>
      </TemplateContent>
      <TemplateCustomerContent>
        <TemplateCustomerTab>
          <p>
            <Link to={"/"}> HOME </Link> /{" "}
            <Link to={"/"}>LOGISTICS SERVICES</Link> /
            <Link to={"/drop-trailer"}>DROP TRAILER</Link>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            veniam dolorum dolores odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            tempore?
          </p>
          <p>
            <span>BENEFITS OF DROP TRAILER PROGRAM INCLUDE:</span> Less driver
            wait time, less detention paid, affordable and flexible storage
            space.
          </p>
        </TemplateCustomerTab>
        <TemplateCustomerTab>
          <img src={Rating} alt="" />
        </TemplateCustomerTab>
      </TemplateCustomerContent>
      <TemplateServiceContent>
        <TemplateServiceTab>
          <p>Services Offered</p>
          <div>
            <ul>
              <li>Trailer storage on & off-site</li>
              <li>Trailer pools</li>
              <li>Drop & hook</li>
              <li>Project-based freight</li>
              <li>Spot freight</li>
              <li>Secure lots</li>
            </ul>
            <ul>
              <li>Van</li>
              <li>Refrigerated</li>
              <li>Flatbed</li>
              <li>Power only</li>
              <li>Liftgate</li>
              <li>Load outs</li>
            </ul>
          </div>
        </TemplateServiceTab>
      </TemplateServiceContent>
      <TemplateSetContent>
        <p>what sets us apart</p>
        <TemplateSetTabContainer>
          <TemplateSetTab>
            <TemplateSetTabHeader>
              <p>COMPREHENSIVE</p>
            </TemplateSetTabHeader>
            <TemplateSetTabContent>
              <TemplateSetTabSubContent>
                <img src={CheckList} alt="" />
              </TemplateSetTabSubContent>
              <TemplateSetTabSubContent>
                <p>ELEVATED OFFERINGS</p>
                <p>
                  Whether it’s project-based, seasonal, or a more regular need,
                  we can offer support with the greatest attention to detail.
                </p>
              </TemplateSetTabSubContent>
            </TemplateSetTabContent>
            <TemplateSetTabContent>
              <TemplateSetTabSubContent>
                <img src={WareHouse} alt="" />
              </TemplateSetTabSubContent>
              <TemplateSetTabSubContent>
                <p>EXTENSIVE NETWORK</p>
                <p>
                  Access to 250,000 trailers, 750 full-service secure yards, and
                  200+ trailer facilities.
                </p>
              </TemplateSetTabSubContent>
            </TemplateSetTabContent>
          </TemplateSetTab>

          <TemplateSetTab>
            <TemplateSetTabHeader>
              <p>ACCOUNTABLE</p>
            </TemplateSetTabHeader>
            <TemplateSetTabContent>
              <TemplateSetTabSubContent>
                <img src={TeamFlag} alt="" />
              </TemplateSetTabSubContent>
              <TemplateSetTabSubContent>
                <p>BACKED BY EXPERTS</p>
                <p>
                  We have a large team of dedicated experts who can communicate
                  with all players of the supply chain: shippers, receivers,
                  carriers, cross-dock facilities and warehouse facilities.
                </p>
              </TemplateSetTabSubContent>
            </TemplateSetTabContent>
            <TemplateSetTabContent>
              <TemplateSetTabSubContent>
                <img src={HandShake} alt="" />
              </TemplateSetTabSubContent>
              <TemplateSetTabSubContent>
                <p>HANDS-ON COORDINATION</p>
                <p>
                  We understand your account intimately and work hard to cater
                  to your specific needs.
                </p>
              </TemplateSetTabSubContent>
            </TemplateSetTabContent>
          </TemplateSetTab>
          <TemplateSetTab>
            <TemplateSetTabHeader>
              <p>PROACTIVE</p>
            </TemplateSetTabHeader>
            <TemplateSetTabContent>
              <TemplateSetTabSubContent>
                <img src={CustomerService} alt="" />
              </TemplateSetTabSubContent>
              <TemplateSetTabSubContent>
                <p>24/7/365</p>
                <p>Live customer service and support.</p>
              </TemplateSetTabSubContent>
            </TemplateSetTabContent>
            <TemplateSetTabContent>
              <TemplateSetTabSubContent>
                <img src={Tracking} alt="" />
              </TemplateSetTabSubContent>
              <TemplateSetTabSubContent>
                <p>PROACTIVE SHIPMENT TRACKING</p>
                <p>
                  Keeping you informed through our world-class customer service,
                  API and EDI integrations and our proprietary TRAX platform.
                </p>
              </TemplateSetTabSubContent>
            </TemplateSetTabContent>
          </TemplateSetTab>
        </TemplateSetTabContainer>
      </TemplateSetContent>
      <TemplateSpeakContent>
        <p>SPEAK TO AN EXPERT</p>
        <p>
          Reach out to your dedicated Logistics Account Executive or contact the
          Drop Trailer Team directly at
          <a href="tel:8183139166">818-313-9166</a>
          or DropTrailer@pgi.com
        </p>
      </TemplateSpeakContent>
    </TemplateContainer>
  );
};

export default Template;
