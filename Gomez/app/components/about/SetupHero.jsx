import { Button, Container, Group, Image, Text } from "@mantine/core";
import classes from "./SetupHero.module.css";

import Setup from "../../../public/CodeSetup.webp";

export default function SetupHero() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg" className={classes.inner}>
        <h1 className={classes.title}>
          Mastery begins with{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Training
          </Text>{" "}
        </h1>

        <Text className={classes.description} size="lg">
          After teaching myself to code for many years I attended coding classes
          from{" "}
          <strong>
            Harvard, University of California Riverside, and University of
            California San Diego
          </strong>
          <br></br>I then completed a technical Certificate from a Code School
          and started my business. <strong>Commitment</strong> drives learning,
          which creates <strong>Mastery</strong>
        </Text>

        <Image src={Setup.src} alt="Storm Code's PC Setup" mt={25} />
      </Container>
    </div>
  );
}
