import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Yummy</h4>
          <p>
            We are team of engineers and want to minimize food wastage.
          </p>

          <p>
            food has an expiry date our planet shoudn't.
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Team of Yummy</h3>
            </div>

            <p>
            Hey, Everyone  We are  Athrav Diwan and  Tushar Tripathi, the founder of Yummy...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
