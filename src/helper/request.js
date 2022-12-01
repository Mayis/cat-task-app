import axios from "axios";
export default async function request(url, limit, page, catId) {
  const options = {
    method: "GET",
    url,
    params: { limit, page, category_ids: catId },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
