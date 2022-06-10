import { PaperClip } from "@/assets/paperClip";
import React, { ReactElement, useRef } from "react";

export const MiniChatFileUpload = ({
    uploadFileFunction,
    allowedFileExtensions,
}: {
    uploadFileFunction: (v: { fileName: string; fileContent: string }) => void;
    allowedFileExtensions: string[];
}): ReactElement => {
    const fileRef = useRef(null);
    const getBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () =>
                resolve(reader.result.toString().substr(reader.result.toString().indexOf(",") + 1));
            reader.onerror = error => reject(error);
        });
    };

    const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files.length) {
            const file = e.target.files[0];
            const fileBase64 = (await getBase64(file)) as string;
            uploadFileFunction({ fileName: file?.name, fileContent: fileBase64 });
        }
    };

    return (
        <div
            title={allowedFileExtensions?.join(" ")}
            onClick={() => fileRef?.current?.click()}
            className='file-upload__wrap'
        >
            <PaperClip fill='#ADB5BD' />

            <div className='file-upload__inner'>
                <input
                    type='file'
                    ref={fileRef}
                    className='file-upload__inner-input'
                    accept={allowedFileExtensions?.map(ext => "." + ext)?.join(",")}
                    onChange={uploadFile}
                />
            </div>
        </div>
    );
};
