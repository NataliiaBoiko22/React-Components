interface Image {
  id: number;
  webformatURL: string;
  tags: string;
  largeImageURL: string;
  likes: string;
  downloads: string;
  user: string;
}
const fetchImage = (
  query = "",
  page = 1,
  key = "33010792-9be0a9a8fe82c8e51d7216432"
): Promise<Image[]> => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=18`
  )
    .then(
      (x) =>
        new Promise<Response>((resolve) => setTimeout(() => resolve(x), 600))
    )
    .then((result) => result.json())
    .then((data) => {
      return data.hits.map((image: Image) => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        tags: image.tags,
        likes: image.likes,
        downloads: image.downloads,
        user: image.user,
      }));
    });
};
export default fetchImage;
