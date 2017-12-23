import kotlinx.serialization.Serializable

/**
 * Represents the appearance of a user in the app.
 *
 * Can be an image or an emoji
 */
@Serializable
data class Avatar(private val value: String) {

    companion object {
        val URL_REGEX = Regex("^https?://.*")
        val EMOJI_REGEX = Regex("^[\uD83C-\uDBFF\uDC00-\uDFFF]{2}$")
    }

    init {
        if (!isEmoji && !isUrl)
            throw IllegalArgumentException("Invalid avatar (must be url or emoji): $value")
    }

    val isEmoji get() = value.matches(EMOJI_REGEX)

    val isUrl get() = value.matches(URL_REGEX)
}