import {environment} from "../../../../environments/environment";

const {API} = environment

const urls = {
  episodes: `${API}/episode`,
  character: `${API}/character`
}
export {urls}
