import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import Modal from "./Modal";

describe("Modal", () => {
  const defaultProps = {
    image: "",
    likes: 0,
    downloads: 0,
    user: "",
    tags: "",
    onClose: vi.fn(),
  };

  it("renders modal component with loading message", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders modal component with image and details when loaded", async () => {
    const { getByTestId } = render(<Modal {...defaultProps} />);
    const modal = getByTestId("modal");
    const closeBtn = getByTestId("close");
    const img = screen.getByAltText("test-image.jpg");

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    fireEvent.load(img);

    await waitFor(() => {
      expect(screen.getByText("Likes:")).toBeInTheDocument();
      expect(screen.getByText("Downloads:")).toBeInTheDocument();
      expect(screen.getByText("Name of contributor:")).toBeInTheDocument();
      expect(screen.getByText("Tags:")).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      expect(modal).toHaveStyle({ visibility: "visible" });
    });

    fireEvent.click(closeBtn);

    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("closes modal when overlay is clicked", () => {
    const { getByTestId } = render(<Modal {...defaultProps} />);
    const modal = getByTestId("modal");
    const overlay = screen.getByTestId("overlay");

    expect(modal).toBeInTheDocument();
    fireEvent.click(overlay);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("closes modal when escape key is pressed", () => {
    const { getByTestId } = render(<Modal {...defaultProps} />);
    const modal = getByTestId("modal");

    fireEvent.keyDown(modal, { code: "Escape" });
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
