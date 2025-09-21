import { Text, Container, Grid, Title } from "@mantine/core";
import React from "react";

import Microlink from "@microlink/react";
import Link from "next/link";
import Accolades from "./Accolades";
import AccoladesTwo from "./AccoladesTwo";

export default function Preview() {
  return (
    <Container size="lg" py={20} style={{ borderBottom: "2px solid black" }}>
      <Accolades />

      <AccoladesTwo />

      <Grid gutter={"md"} p={3} mt={20}>
        <Grid.Col span={4}>
          <Link href="https://bereketli-art.vercel.app" target="_blank">
            <Microlink url="https://bereketli-art.vercel.app" lazy={true} />
          </Link>
        </Grid.Col>
        <Grid.Col span={4}>
          <Link href="https://islasautobody.com" target="_blank">
            <Microlink
              url="https://islasautobody.com"
              contrast={true}
              lazy={true}
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={4}>
          <Link href="https://stormcodes.com" target="_blank">
            <Microlink
              url="https://stormcodes.com"
              contrast={true}
              media="logo"
              lazy={true}
            />
          </Link>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
