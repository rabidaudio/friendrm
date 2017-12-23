//package audio.rabid.friendrm.common.models
//
//import com.soywiz.klock.DateTime
//import com.soywiz.klock.SimplerDateFormat
//import kotlinx.serialization.*
//import kotlinx.serialization.internal.SerialClassDescImpl
//
////@Serializer(forClass = DateTime::class)
//object DateTimeSerializer: KSerializer<DateTime> {
//
//    private val dateFormat = SimplerDateFormat("yyyy-MM-dd'T'HH:mm:ssZ")
//
//    override val serialClassDesc: KSerialClassDesc
//            = SerialClassDescImpl("com.soywiz.klock.DateTime")
//
//    override fun save(output: KOutput, obj: DateTime) {
//        output.writeStringValue(dateFormat.format(obj))
//    }
//
//    override fun load(input: KInput): DateTime {
//        return dateFormat.parseDate(input.readStringValue())
//    }
//}