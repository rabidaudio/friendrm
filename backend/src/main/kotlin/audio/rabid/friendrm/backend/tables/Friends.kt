package audio.rabid.friendrm.backend.tables

import org.jetbrains.exposed.dao.IntIdTable
import org.jetbrains.exposed.sql.Column

object Friends: IntIdTable("friends") {
    val name: Column<String> = varchar("name", 255)
    val avatar: Column<String?> = varchar("avatar", 255).nullable()
}