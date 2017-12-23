import kotlinx.serialization.Serializable

/**
 * A time interval
 */
@Serializable
data class Frequency(val interval: Int, val unit: Frequency.Unit) {

    @Serializable
    enum class Unit {
        year, month, week, day;

        val days get() = when (this) {
            Frequency.Unit.year -> 365 // TODO leap year?
            Frequency.Unit.month -> 30 // TODO variable months?
            Frequency.Unit.week -> 7
            Frequency.Unit.day -> 1
        }
    }

    val days get() = interval * unit.days
}