import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'

function SkeletonDailyPlaylist({ theme }) {
  const themeClass = theme
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-playlist-item">
        <SkeletonElement type="playlist-image" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonDailyPlaylist
