import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import * as style from "./AboutUs.style";

export default function AboutUs() {
  const guidelines = [
    {
      title: "1. Design a mockup",
      description: `Design how you think the site should look using a graphic design
        tool like Photoshop. This will help our designers directly visualize
        and implement your suggestion. Visual mockups are often much more
        helpful than lengthy written descriptions.`,
      buttonText: "Get Started with Design",
      buttonLink: "#",
    },
    {
      title: "2. Submit code changes",
      description: `Have experience with HTML and CSS? Even better! Visit our GitHub
        page and submit a pull request with the changes you'd like to see.
        It's as simple as inspecting the page's source code in your browser
        (right click > inspect element), making the edits, and then
        submitting them to the appropriate files in our Git repository.`,
      buttonText: "Visit Our GitHub",
      buttonLink: "https://github.com/sinet77",
    },
  ];

  return (
    <Box sx={style.Background}>
      <Box sx={style.Container}>
        <Typography sx={style.Title} variant="h4" gutterBottom>
          Help Improve Chess Academy
        </Typography>
        <Typography sx={style.Description} paragraph>
          Chess Academy is constantly evolving, with new features and designs
          being implemented on a weekly basis (if not more frequently). However,
          we don't always get everything right, and that's where you can help!
          If you notice something that could be improved or done differently,
          there are a few ways to get your changes implemented:
        </Typography>

        {guidelines.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? "-100vw" : "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          >
            <Box sx={style.Section}>
              <Typography sx={style.SubTitle} variant="h5" gutterBottom>
                {item.title}
              </Typography>
              <Typography sx={style.Description}>{item.description}</Typography>
              <Button
                sx={style.ActionButton}
                variant="contained"
                href={item.buttonLink}
              >
                {item.buttonText}
              </Button>
            </Box>
          </motion.div>
        ))}

        <Typography sx={style.FooterText}>
          Your contributions are invaluable in helping us make Chess Academy
          better!
        </Typography>
      </Box>
    </Box>
  );
}
