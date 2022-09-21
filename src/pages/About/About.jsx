import React from "react";
import { useEffect } from "react";
import classNames from "classnames";

import { Text } from "../../components/Text";
import { TextVariants } from "../../constants/VariantsOfComponents";

const About = ({ className }) => {
  const AboutClass = classNames("container", className);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={AboutClass}>
        <div className="about-container">
          <div className="about-title">
            <Text>ABOUT US</Text>
          </div>
          <div className="about-info">
            <Text variant={TextVariants.h4_regular}>
              <Text className="text-yellow">Naizop</Text> offers marketing tools
              to empower your business’s marketing efforts, bring in more leads,
              and convert them to customers. You can build websites and online
              stores, manage your sales and leads in CRM, and use multiple
              communication channels to interact with your customers: email,
              SMS, web push, Viber, and chatbots for Facebook, Telegram,
              WhatsApp, and Instagram.
            </Text>
            <Text variant={TextVariants.h4_regular}>
              The company’s offices and representatives are located in Brazil,
              Mexico, Ukraine, Belarus, and Nigeria. Our support team speaks
              English, Portuguese, Spanish, Russian, and Ukrainian and is
              available 24/7, so we can effectively assist and guide SendPulse
              users from all over the world.
            </Text>
            <Text variant={TextVariants.h4_regular}>
              In March 2019, <Text className="text-yellow">Naizop</Text> reached
              1 million registered users, with more than 1,000 new users joining
              us every day. To help people get started with the platform, we
              invite them to visit our regularly updated YouTube channel,
              knowledge base, and blog.
            </Text>
            <Text variant={TextVariants.h4_regular}>
              We are proud to cooperate with both large companies and small
              business owners from around the globe and enjoy seeing their
              mailing lists grow with every coming day. Among SendPulse
              customers are Swatch, Kärcher, PricewaterhouseCoopers, Radisson
              Blu Hotels, and LOT Polish Airlines.
            </Text>
          </div>
        </div>
      </div>
      <div className={"container about " + className}>
        <div className="about-container about-reverse">
          <div className="about-title">
            <Text>MISSION</Text>
          </div>
          <div className="about-info">
            <Text variant={TextVariants.h4_regular}>
              <Text className="text-yellow">Naizop</Text> offers marketing tools
              to empower your business’s marketing efforts, bring in more leads,
              and convert them to customers. You can build websites and online
              stores, manage your sales and leads in CRM, and use multiple
              communication channels to interact with your customers: email,
              SMS, web push, Viber, and chatbots for Facebook, Telegram,
              WhatsApp, and Instagram.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
