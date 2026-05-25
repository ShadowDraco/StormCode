import { Button, Container, Group, Image, Text } from "@mantine/core";
import classes from "./OwnerHero.module.css";

import Owner from "../../../public/Owner3.webp";

export default function OwnerHero() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg" className={classes.inner}>
        <h1 className={classes.title}>
          Design begins with{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Passion:
          </Text>{" "}
        </h1>

        <Text className={classes.description} size="lg">
          Creativity is not enough, nor is talent. As the founder of Storm Code
          I have pursued, with tenacity, that which I desired. Developing
          skills, creating eye-catching designs, and hitting the top search
          results requires <strong>Passion.</strong>
        </Text>

        <Image src={Owner.src} alt="Storm Code's Owner" mt={25} />
      </Container>
    </div>
  );
}
