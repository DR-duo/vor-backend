import axios from "axios";

/**
 *  Class for using RuneterraAPI
 *
 */

export default class RuneterraAPI {
  constructor(url = "localhost", port = 21337) {
    this.url = `https://${url}:${port}`;
    /*     this.config = {
      headers: {
        "Access-Control-Request-Method": "GET",
        Origin: `https://${url}`,
        Accept: "/"
      }
    }; */
  }

  /* Basic one to one with API */
  endpointPositionalRectangles() {
    const endpoint = `${this.url}/positional-rectangles`;
    return (
      axios
        .get(endpoint)
        //.get(endpoint, this.config)
        .then(response => response)
        .catch(error => console.log(error))
    );
  }
}
