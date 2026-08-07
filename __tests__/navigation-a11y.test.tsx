/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

const mockUseRouter = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => mockUseRouter(),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: Record<string, unknown>) => (
    <a href={href as string} {...props}>
      {children as React.ReactNode}
    </a>
  ),
}));

jest.mock("next-seo", () => ({
  NextSeo: () => null,
}));

jest.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));

describe("site navigation accessibility", () => {
  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      locale: "en",
      locales: ["jp", "en"],
      asPath: "/",
    });
  });

  it("has one named navigation landmark and exposes the mobile menu state", async () => {
    const user = userEvent.setup();

    render(<Header />);

    expect(screen.getAllByRole("navigation")).toHaveLength(1);

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    expect(menuButton).toHaveAttribute("aria-controls", "primary-navigation-links");
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });

  it("gives every social link an accessible name", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Facebook" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "X" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Instagram" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "YouTube" })).toBeInTheDocument();
  });

  it("provides a skip link that targets the main content landmark", () => {
    render(
      <Layout language="en" title="Accessibility test">
        <p>Page content</p>
      </Layout>,
    );

    expect(screen.getByRole("link", { name: "Skip to main content" })).toHaveAttribute("href", "#main-content");
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
  });
});
