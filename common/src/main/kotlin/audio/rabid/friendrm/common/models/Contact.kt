package audio.rabid.friendrm.common.models

import com.soywiz.klock.DateTime
import com.soywiz.klock.SimplerDateFormat
import kotlinx.serialization.Serializable

/**
 * Represents a moment in time when a friend was contacted and the mode
 */
@Serializable
data class Contact(
        private val date: String,
        val friend: Friend,
        val channel: Channel?
) {

    val dateTime: DateTime
        get() = SimplerDateFormat("yyyy-MM-dd'T'HH:mm:ssZ").parseDate(date)
}