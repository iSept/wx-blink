import { HTTP } from '../utils/http.js';
import { apis } from '../config/apis.js';

class LikeModel extends HTTP {
  like(behavior, artID, category) {
    let url = behavior === 'like' ? apis.like : apis.likeCancel;
    this.request({
      url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    })
  }
}

export default new LikeModel();
