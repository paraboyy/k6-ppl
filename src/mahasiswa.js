import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 15,
  // A string specifying the total duration of the test run.
  duration: '30s',
  
  // stage: [
  //   {duration: '10s', target: 10},
  //   {duration: '5s', target: 20},
  //   {duration: '7s', target: 15},
  //   {duration: '10s', target: 0},
  // ]
};

export default function() {
  http.get('https://backend-ipk-485701353107.us-central1.run.app/mahasiswa');
  sleep(1);
}
