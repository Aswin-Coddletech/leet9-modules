export interface INews{
    newsId: string,
    authorId: string,
    authorUsername: string,
    newsContent: string,
    gameStudioName: string,
    gameContentURL: string,
    gameProxyURL: string,
    source: string,
    attachmentDetails: IAttachments[],
    createdDateTime: number,
    channelName: string,
    newsUpdated: boolean,
    activeState: boolean
}

export interface IAttachments{
    attachmentId: string,
  attachmentName: string,
  proxyURL: string,
  size: number,
  contentType: string,
  height: number,
  width: number,
  attachmentState: boolean
}