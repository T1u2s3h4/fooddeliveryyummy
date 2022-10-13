import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}> 
         <img src={me} alt="Founder" height={200} width={200} />
        <h3> Athrav Diwan  and Tushar Tripathi</h3>

        <p>
          Hey, Everyone  We are Athrav Diwan and  Tushar Tripathi, the founder of Yummy.
          <br />
          Our aim is to create the most tasty food on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
