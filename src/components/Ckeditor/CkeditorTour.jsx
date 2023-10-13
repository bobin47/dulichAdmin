import React from 'react'
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
export default function CkeditorTour({ onChange, value }) {
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        onChange(data);
    };

    return (
        <div>
            <CKEditor
                editor={Editor}
                data={value}
                onChange={handleEditorChange}
            // config={{
            //   plugins: [ImageInsertViaUrl],
            //   toolbar: ['insertImage']
            // }}
            />
        </div>
    );
}
