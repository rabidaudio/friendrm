package audio.rabid.friendrm.backend.serializers

import audio.rabid.friendrm.backend.models.FriendModel
import audio.rabid.friendrm.common.models.Friend

/**
 * Serializer gives you a layer of separation between a table model and json output
 */
object FriendSerializer: Serializer<FriendModel, Friend> {

    override fun serialize(model: FriendModel) = Friend(
            id = model.id.value,
            name = model.name,
            avatar = model.avatar
    )
}