import NUMBER from "./number.js";

const SNACKBAR_TEXT = Object.freeze({
  MOVED_TO_HISTORY_VIDEO: "🟢 본 영상으로 이동되었습니다",
  MOVED_TO_WATCH_LATER_VIDEO: "🟠 볼 영상으로 이동되었습니다",
  ADDED_TO_LIKE_VIDEO: "👍 좋아요 표시한 영상에 추가되었습니다",
  DELETED_FROM_LIKE_VIDEO: "👍 좋아요 표시한 영상에서 삭제되었습니다",
  VIDEO_DELETED: "영상이 삭제되었습니다",
  VIDEO_SAVED: "영상이 저장되었습니다",
  CANCELED_VIDEO_SAVE: "저장을 취소하였습니다",
  REACHED_MAX_COUNT: `영상은 ${NUMBER.MAX_SAVED_VIDEOS_COUNT}개 이하만 저장할 수 있습니다`,
});

export default SNACKBAR_TEXT;
