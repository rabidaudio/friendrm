package audio.rabid.friendrm.common.models

import kotlinx.serialization.Serializable

@Serializable
data class ApiPagedResponse<out T>(val data: List<T>)