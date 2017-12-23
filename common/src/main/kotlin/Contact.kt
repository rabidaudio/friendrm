import com.soywiz.klock.Klock
import kotlinx.serialization.Serializable

/**
 * Represents a moment in time when a friend was contacted and the mode
 */
@Serializable
data class Contact(val date: Klock, val friend: Friend, val channel: Channel?)