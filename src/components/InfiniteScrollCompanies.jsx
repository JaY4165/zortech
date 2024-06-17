import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const InfiniteScrollCompanies = () => {
  const slides = [
    {
      src: "https://static.wixstatic.com/media/cbef27_55b1359afbf24d3d9210a98d21837da5~mv2.png/v1/fill/w_358,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Deloitte_Logo_edited_edited.png",
    },
    {
      src: "https://static.wixstatic.com/media/cbef27_28cd0dad56064e2b8a3ec6c97ed72a75~mv2.png/v1/fill/w_338,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UST-Global-1.png",
    },
    {
      src: "https://static.wixstatic.com/media/cbef27_d1cfd09ed8a24febb829fe316aed3fe5~mv2.jpg/v1/fill/w_354,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/TATA_CONSULTANCY_SERVICES_Logo.jpg",
    },
    {
      src: "https://static.wixstatic.com/media/cbef27_5197d0aa7605412792e251c9d0aedc1d~mv2.jpg/v1/fill/w_370,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo-variants-Horizontal-2x_edited.jpg",
    },
    {
      src: "https://static.wixstatic.com/media/cbef27_e6386333768140d18f36f4a3693df9a9~mv2.jpg/v1/fill/w_352,h_176,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Altimetrik-Logo_Horizontal-2Color-PMS_(7).jpg",
    },
  ];
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div
      className="relative h-full overflow-hidden py-12 bg-white w-full"
    >
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex items-center justify-center h-full">
              <Image
                isBlurred
                src={slide.src}
                alt="NextUI Album Cover"
                className="w-24 h-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollCompanies;
