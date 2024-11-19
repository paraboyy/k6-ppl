import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,
  // A string specifying the total duration of the test run.
  duration: "30s",
};

export default function () {
  for (let id = 2105551002; id <= 2105551150; id++) {
    http.get(`https://backend-ipk-485701353107.us-central1.run.app/ipk/${id}`);
  }
}
