import kotlinx.serialization.Serializable

/**
 * A model representing a mode of contact
 */
@Serializable
enum class Channel { text, call, message, inperson }