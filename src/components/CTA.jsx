import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="hidden sm:block" />
        Let&apos;s build something together
      </p>

      <Link to={"/contact"} className="btn">
        Contact
      </Link>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
