import { Button, Image, Link } from "@nextui-org/react";
import HeroImage from "/Devices.gif";
import { motion } from "framer-motion";

const HeroSection = () => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <section className="grid grid-cols-2 w-full">
      <div className="place-content-center space-y-4">
        <motion.h1
          initial="hidden"
          animate="visible"
          transition={1}
          variants={defaultVariants}
          className="text-6xl font-extrabold drop-shadow-sm bg-gradient-to-br from-warning-300 from-10% via-carrot-orange-400 to-carrot-orange-600 inline-block bg-clip-text"
          style={{ color: "transparent" }}
        >
          Zortech Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-wrap text-sm font-normal w-[90%] text-foreground-400"
        >
          Matching top talents to great organizations. Experience the ease of
          technology like never before with our tech company.
        </motion.p>
        <div className="flex space-x-10 ">
          <Button
            as={Link}
            color="warning"
            className="bg-black"
            href="#"
            variant="bordered"
          >
            Find New Talent
          </Button>
          <Button as={Link} color="warning" href="#" variant="light">
            Find a Career
          </Button>
        </div>
      </div>
      <div className="place-items-center place-self-end ">
        <Image
          isBlurred
          src={HeroImage}
          alt="NextUI Album Cover"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
