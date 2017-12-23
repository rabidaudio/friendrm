package audio.rabid.friendrm.backend

import audio.rabid.friendrm.backend.models.FriendModel
import audio.rabid.friendrm.backend.tables.Friends
import audio.rabid.friendrm.common.models.ApiResponse
import audio.rabid.friendrm.common.models.Friend
import io.javalin.Javalin
import kotlinx.serialization.serializer
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.transactions.transaction
import java.io.PrintStream


fun main(vararg args: String) {
    val databaseUrl = System.getenv("DATABASE_URL") ?: "jdbc:postgresql://localhost/friendrm?user=cjk"
    Database.connect(databaseUrl, driver = "org.postgresql.Driver")

//    transaction {
//        logger.addLogger(StdOutSqlLogger)
//
//        FriendModel.new {
//            name = "John Gattuso"
//            avatar = "💩"
//        }
//    }

    val port = System.getenv("PORT")?.toInt() ?: 8080
    val app = Javalin.start(port)

    app.get("/") { ctx ->
        transaction {
            val friends = FriendModel.find { Friends.avatar.isNotNull() }

            val res = ApiResponse(data = friends.first())
            Friend::class.serializer()
//            val json = JSON.stringify(ApiResponse.serializer(Friend.serializer()), res)
//            val json = JSON.stringify(Friend::class.serializer().list, friends.map { FriendSerializer.serialize(it) })
            ctx.contentType("application/json").result("""{"hello": "world"}""")
        }
    }

    app.exception(Exception::class.java) { exception, ctx ->
        exception.printStackTrace()
        exception.printStackTrace(PrintStream(ctx.response().outputStream))
    }
}

//fun Exception.toMap(): Map<String, Any?> {
//    val stacktrace = stackTrace.map { e ->
//        mapOf<String, Any?>("classname" to e.className,
//                "filename" to e.fileName,
//                "method_name" to e.methodName,
//                "line_number" to e.lineNumber)
//    }
//    return mapOf("type" to javaClass.name,
//            "message" to message,
//            "stacktrace" to stacktrace,
//            "cause" to (cause as? Exception)?.toMap()
//    )
//}