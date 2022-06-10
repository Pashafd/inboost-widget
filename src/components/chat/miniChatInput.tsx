import { EmojiIconNew } from "@/assets/emojiIconNew";
import { EmojiData, Picker } from "emoji-mart";
import React, { ReactElement, useState } from "react";
import { useRef } from "react";
import { MiniChatFileUpload } from "./miniChatFileUpload";
import TextareaAutosize from "react-textarea-autosize";
import { AirplaneNew } from "@/assets/airpalneNew";

export const MiniChatInput = ({
    sendMessage,
    sendFile,
}: {
    sendMessage: (val: string) => void;
    sendFile: ({ fileName, fileContent }: { fileName: string; fileContent: string }) => void;
}): ReactElement => {
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);

    const onSubmit = () => {
        if (message.trim()) {
            sendMessage(message);
        } else {
            console.error("message should be not empty");
        }
        setMessage("");
    };

    const addEmoji = (emoji: EmojiData) => {
        if ("native" in emoji) {
            setMessage(mes => `${mes}${emoji.native}`);
            inputRef.current.focus();
        }
    };

    return (
        <div className='chat-new__editable'>
            <div className='chat-new__editable-icon'>
                <MiniChatFileUpload
                    uploadFileFunction={v => {
                        sendFile(v);
                    }}
                    allowedFileExtensions={[]}
                />
            </div>

            <div className='chat-new__input-wrap'>
                <TextareaAutosize
                    className='chat-new__input'
                    ref={inputRef}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setMessage(e.target.value);
                    }}
                    value={message}
                    placeholder='Напишіть щось'
                    disabled={false}
                    onKeyDown={(e: React.KeyboardEvent) => {
                        if ("Enter" === e.key) {
                            e.preventDefault();
                            onSubmit();
                        }
                    }}
                />

                <div className='chat-new__emoji-icon'>
                    <button className='chat-new__emoji-button'>
                        <EmojiIconNew />
                    </button>

                    <div className='right-panel-smiles-block'>
                        <Picker color='#2c7dfa' onSelect={addEmoji} />
                    </div>
                </div>
            </div>

            <button
                className='chat-new__send'
                onClick={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <div className='chat-new__send'>
                    <AirplaneNew />
                </div>
            </button>
        </div>
    );
};
