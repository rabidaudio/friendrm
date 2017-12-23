package audio.rabid.friendrm.common.models

import kotlinx.serialization.Serializable

/**
 * A rule about how often you want to contact a friend
 */
@Serializable
data class Rule(val id: Int, val frequency: Frequency, val channel: Channel?)
