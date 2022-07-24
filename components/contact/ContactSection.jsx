import MainTitle from "../shared/MainTitle";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  return (
    <div className="  ">
      <div className="">
        <MainTitle value="Contactez-nous" />
      </div>
      <div className="w-full flex p-10">
        <div className="w-full lg:w-1/2 p-5">
          <h2>
          details
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo harum eaque, quia sint beatae asperiores voluptatum omnis quaerat quasi fugiat iusto assumenda aspernatur necessitatibus eius aperiam quidem alias commodi nihil.
          </p>
          </div>
        <div className="w-full lg:w-1/2">
          <ContactLinks />
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
