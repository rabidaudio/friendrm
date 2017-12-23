package audio.rabid.friendrm.backend.models

import audio.rabid.friendrm.backend.tables.Friends
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass

class FriendModel(id: EntityID<Int>) : IntEntity(id) {

    companion object : IntEntityClass<FriendModel>(Friends)

    var name by Friends.name
    var avatar by Friends.avatar
}