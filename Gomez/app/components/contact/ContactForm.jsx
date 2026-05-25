"use client";

import { useState, useRef } from "react";

import {
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  Select,
} from "@mantine/core";
import ContactIconsList from "./ContactIcons";
import classes from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [service, setService] = useState("");

  const submit = async () => {
    const response = await fetch(
      `/api/contact/${email}/${name}/${message}/${service}`,
      {
        method: "POST",
      }
    );

    const res = await response.json();

    setStatus(res.success);
  };

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={50}
        p={15}
        style={{ borderRadius: 8 }}
      >
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 12 hours
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            radius="md"
            onChange={(e) => setEmail(e.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            radius="md"
            onChange={(e) => setName(e.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Select
            label="Service Type"
            placeholder="Website"
            mt="md"
            radius="md"
            data={[
              "New Website",
              "New Webmaster",
              "Website Transfer",
              "Gaming PC",
              "Work PC",
              "Other/Describe",
            ]}
            onChange={(e) => {
              setService(e);
            }}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Textarea
            required
            label="Your message"
            placeholder="I want to talk about websites"
            minRows={4}
            mt="md"
            radius="md"
            onChange={(e) => setMessage(e.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Text c="purple">{status != "" ? status : ""}</Text>
            <Button className={classes.control} onClick={() => submit()}>
              Send!
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
