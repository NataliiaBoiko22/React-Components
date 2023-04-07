import { test, expect, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageGalleryItem, { ImageGalleryItemProps } from "./ImageGalleryItem";

describe("ImageGalleryItem", () => {
  const props: ImageGalleryItemProps = {
    largeImageURL:
      "https://pixabay.com/get/gd005578ee599811e6d87f743bded4515cb13bfc11fea517ddbfe7de046c8b867ff874a7f94031da568669a1ab2707ca516e7551968f57f1842c3100fdaf99b74_1280.jpg",
    webformatURL:
      "https://pixabay.com/get/ge675e1e52025ef79ff71fb5f8670cb8b84f1b5ddc5d9b5f45255625ed115be725bcee9620af0b122885147b23ce4042713d47f227e318c9a613b7d2e567e1eb6_640.jpg",
    tags: "example",
    likes: 95,
    downloads: 15336,
    user: "Ralphs_Fotos",
    onShow: vi.fn(),
  };

  test("renders correctly", () => {
    render(<ImageGalleryItem {...props} />);
    const image = screen.getByTestId("imageGalleryItemImage");
    expect(image).toHaveAttribute("src", props.webformatURL);
    expect(image).toHaveAttribute("alt", props.tags);
    const likes = screen.getByTestId("imageGalleryItemLikes");
    expect(likes).toHaveTextContent(props.likes.toString());
  });

  test("calls onShow when image or button is clicked", () => {
    render(<ImageGalleryItem {...props} />);
    const image = screen.getByTestId("imageGalleryItemImage");
    fireEvent.click(image);
    expect(props.onShow).toHaveBeenCalledWith(
      props.largeImageURL,
      props.likes,
      props.user,
      props.tags
    );
    const button = screen.getByText("More info");
    fireEvent.click(button);
    expect(props.onShow).toHaveBeenCalledTimes(2);
  });
});
