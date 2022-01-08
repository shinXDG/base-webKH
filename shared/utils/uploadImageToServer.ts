import { ApiClient } from 'services/ApiService'
import { MEDIA_NAME } from 'utils/constants'

const requestUploadMediaProduct = (payload: any) =>
  ApiClient.post(`/file/upload/${payload.name}/single`, payload.image)

interface ImageUploadResponse {
  filename: string
  path: string
  url: string
}
export const uploadImageToServer = async (
  file: any
): Promise<ImageUploadResponse> => {
  try {
    const dataImage = new FormData()
    dataImage.append('image', file[0]?.originFileObj)
    const payload = {
      name: MEDIA_NAME.IMAGE,
      image: dataImage,
    }
    const resUploadImage = await requestUploadMediaProduct(payload)
    return resUploadImage.data as ImageUploadResponse
  } catch (error) {
    throw error
  }
}

// export const uploadVideo = async (file: any): Promise<ImageUploadResponse> => {
//   try {
//     const dataVideo = new FormData()
//     dataVideo.append('video', file.fileList[0].originFileObj)
//     const resUploadImage = await requestUploadMediaProduct('video', dataVideo)
//     return resUploadImage.data as ImageUploadResponse
//   } catch (error) {
//     throw error
//   }
// }
