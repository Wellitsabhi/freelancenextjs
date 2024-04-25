import { Message } from "@/src/models/User";
export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Array<Message>;
}