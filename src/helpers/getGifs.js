export const getGifs = async (category) => {
  const uri = `https://api.giphy.com/v1/gifs/search?api_key=B5zyTJdaiuswPWPRw2meSbYVwAa6DAHh&q=${encodeURI(
    category
  )}&limit=10`;
  const res = await fetch(uri);
  const { data } = await res.json();

  const gif = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gif;
};
