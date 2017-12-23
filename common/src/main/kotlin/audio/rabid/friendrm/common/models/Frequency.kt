package audio.rabid.friendrm.common.models

import kotlinx.serialization.Serializable

/**
 * A time interval
 */
@Serializable
data class Frequency(val interval: Int, val unit: TimeUnit) {

    enum class TimeUnit {
        year, month, week, day;

        val days get() = when (this) {
            year -> 365 // TODO leap year?
            month -> 30 // TODO variable months?
            week -> 7
            day -> 1
        }
    }

    val days get() = interval * unit.days
}