import type { Meta, StoryObj } from "@storybook/nextjs";
import JsonViewer from "./json-viewer";

const meta: Meta<typeof JsonViewer> = {
  title: "Components/JsonViewer",
  component: JsonViewer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof JsonViewer>;

const sampleData = {
  name: "Server Manager",
  version: 1.0,
  status: "active",
  logs: [
    { id: 1, message: "Started server", level: "info" },
    { id: 2, message: "Received request", level: "debug" },
    { id: 3, message: "Error occurred", level: "error", details: { code: 500, reason: "Internal Server Error" } },
  ],
  config: {
    port: 8080,
    env: "development",
    features: { auth: true, logging: true },
  },
};

export const Default: Story = {
  args: {
    logData: sampleData,
  },
};
