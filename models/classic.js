import { HTTP } from '../utils/http.js';
import { apis } from '../config/apis';

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: apis.getLatest,
      success: res => {
        sCallback(res);
      }
    })
  }
}

export default new ClassicModel();
