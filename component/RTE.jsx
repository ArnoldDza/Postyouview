import React from 'react'
import conf from '../conf/conf.js'
import { Editor } from '@tinymce/tinymce-react';
import {useForm,Controller} from 'react-hook-form'

function RTE({label,name,control,defaultvalue=""}){
    return(
        <div className='w-full'>
            {label && <label className=' inline-block mb-2'>{label}</label>}
            <Controller
            name={name || "content"}
            control={control}
            render={({field:{onChange}})=>(
                <Editor
                apiKey={conf.Tiny_mce_apikey}
                initialValue={defaultvalue}
                init={{
                  initialValue: defaultvalue,
                  height: 500,
                  menubar: true,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                 
                }}
                onEditorChange={onChange}
              />
    )}
            />

        </div>
    )
}
export default RTE