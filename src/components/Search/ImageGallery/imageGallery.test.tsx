import { render, fireEvent } from "@testing-library/react";
import sinon from "sinon";
import ImageGallery, { ImageCard } from "./ImageGallery";

const cards: ImageCard[] = [
  {
    id: 7889170,
    largeImageURL:
      "https://pixabay.com/get/gd005578ee599811e6d87f743bded4515cb13bfc11fea517ddbfe7de046c8b867ff874a7f94031da568669a1ab2707ca516e7551968f57f1842c3100fdaf99b74_1280.jpg",
    webformatURL:
      "https://pixabay.com/get/ge675e1e52025ef79ff71fb5f8670cb8b84f1b5ddc5d9b5f45255625ed115be725bcee9620af0b122885147b23ce4042713d47f227e318c9a613b7d2e567e1eb6_640.jpg",
    tags: "example",
    likes: 95,
    downloads: 15336,
    user: "Ralphs_Fotos",
  },
];

describe("ImageGallery", () => {
  it("renders a list of ImageGalleryItem components", () => {
    const { getAllByTestId } = render(
      <ImageGallery cards={cards} onShow={() => {}} />
    );
    const imageGalleryItems = getAllByTestId("image-gallery");
    expect(imageGalleryItems).toHaveLength(cards.length);
  });

  it("calls onShow prop with correct arguments when an ImageGalleryItem is clicked", () => {
    const onShowSpy = sinon.spy();
    const { getByAltText } = render(
      <ImageGallery cards={cards} onShow={onShowSpy} />
    );
    const image = getByAltText(cards[0].tags);
    fireEvent.click(image);
    expect(
      onShowSpy.calledWithExactly(
        cards[0].largeImageURL,
        cards[0].likes,
        cards[0].downloads,
        cards[0].user,
        cards[0].tags
      )
    ).toBe(true);
  });
});
