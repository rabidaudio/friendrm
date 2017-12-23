//package audio.rabid.friendrm.common.models
//
//import kotlinx.serialization.*
//import kotlinx.serialization.internal.SerialClassDescImpl
//
///**
// * Represents the appearance of a user in the app.
// *
// * Can be an image or a single character (e.g. emoji)
// */
////@Serializable(with = Avatar.AvatarSerializer::class)
//data class Avatar(private val value: String) {
//
//
//
//    @Serializer(forClass = Avatar::class)
//    companion object: KSerializer<Avatar> {
//
//        override fun save(output: KOutput, obj: Avatar) {
//            output.writeStringValue(obj.value)
//        }
//
//        override fun load(input: KInput): Avatar {
//            return Avatar(value = input.readStringValue())
//        }
//
//        override val serialClassDesc = SerialClassDescImpl("audio.rabid.friendrm.common.models.Avatar")
//    }
//}