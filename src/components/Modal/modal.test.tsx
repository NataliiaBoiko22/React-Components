import { render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import { Api } from "../../Api/Api";
import Modal from "./Modal";

vi.mock("../../Api/Api");

describe("Modal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state", async () => {
    (Api.useFetchSingleProductQuery as Mock).mockReturnValue({
      isLoading: true,
      error: null,
      data: undefined,
    });

    render(<Modal isOpen onClose={vi.fn()} id={1} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders error state", async () => {
    (Api.useFetchSingleProductQuery as Mock).mockReturnValue({
      isLoading: false,
      error: new Error("error"),
      data: undefined,
    });

    render(<Modal isOpen onClose={vi.fn()} id={1} />);

    expect(screen.getByText(/some error/i)).toBeInTheDocument();
  });

  it("renders product details", async () => {
    const product = {
      id: 1,
      title: "",
      description: "",
      price: 2,
      rating: 3,
      stock: 4,
      brand: "",
      category: "",
      thumbnail: "",
      images: ["", "", "", "", ""],
    };
    (Api.useFetchSingleProductQuery as Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: product,
    });

    render(<Modal isOpen onClose={vi.fn()} id={1} />);
    expect(screen.getByText(/title:/i)).toBeInTheDocument();
    expect(screen.getByText(/brand:/i)).toBeInTheDocument();
    expect(screen.getByText(/price:/i)).toBeInTheDocument();
    expect(screen.getByText(/description:/i)).toBeInTheDocument();
  });
});
