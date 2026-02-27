import { render, screen } from "@testing-library/react";

import Banner from "@/components/Banner";

describe("Banner", () => {
  const imageUrl = "https://unsplash.com/es/fotos/U7Hq8kN8apM";

  it("should render alt the banner component", () => {
    render(<Banner alt="test" src={imageUrl} src2={imageUrl} />);

    expect(screen.getByAltText("test")).toBeInTheDocument();
  });

  it("should render src the banner component", () => {
    render(<Banner alt="test" src={imageUrl} src2={imageUrl} />);

    const testImage = screen.getByAltText("test");
    expect(testImage).toHaveAttribute("srcset", expect.stringContaining("https"));
  });
});
