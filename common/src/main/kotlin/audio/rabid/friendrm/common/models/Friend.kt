package audio.rabid.friendrm.common.models

import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

/**
 * A contact you want to keep up with.
 */
@Serializable
data class Friend(
        val id: Int,
        val name: String,
        val avatar: String?
) {

    @Transient
    val avatarIsUrl
        get() = avatar?.matches(Regex("^https?://.*")) == true
}
