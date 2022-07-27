import { MessageType } from '../../utils/message.types';

/**
* Normally, this custom hook is for resolve messages to different languages.
* For now, it's just a dummy hook for demo-ing purposes
*/
export const useResolvedMessages = (messages: MessageType): MessageType => {
	return messages
};
