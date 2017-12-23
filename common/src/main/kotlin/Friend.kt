import kotlinx.serialization.Serializable

/**
 * A contact you want to keep up with.
 */
@Serializable
data class Friend(
        val id: Int,
        val name: String,
        val avatar: Avatar
)
