package audio.rabid.friendrm.common.models

import kotlinx.serialization.Serializable

@Serializable
data class ApiResponse<out T>(val data: T)