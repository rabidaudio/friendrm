package audio.rabid.friendrm.backend.serializers

import kotlinx.serialization.Mapper
import org.jetbrains.exposed.dao.Entity


interface Serializer<in M: Entity<*>, out T: Any> {

    fun serialize(model: M): T

    companion object {

        inline fun <M: Entity<*>, reified T: Any> default(): Serializer<M, T> = object : Serializer<M, T> {
            override fun serialize(model: M): T = defaultSerialize(model)
        }

        inline fun <M: Entity<*>, reified T: Any> defaultSerialize(model: M): T
                = Mapper.unmapNullable(model.writeValues.map { e -> Pair(e.key.name, e.value) }.toMap())
    }
}