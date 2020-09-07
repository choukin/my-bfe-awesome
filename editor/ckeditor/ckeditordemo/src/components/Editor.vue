<template>
  <div>
      <h3>Classic</h3>
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @focus="onEditorFocus" @input="onEditorInput" @blur='onEditorBlur'> </ckeditor>
      <h3>Doucment</h3>
      <ckeditor :editor="documentEditor" @ready="onReady" v-model="editorData"  :config="editorConfig"> </ckeditor>

  </div>
</template>

<script>
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor'
import TodoList from '@ckeditor/ckeditor5-list/src/todolist'
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Emoji from '@wwalc/ckeditor5-emoji/src/emoji';
import Image from '@ckeditor/ckeditor5-image/src/image'
import InsterImage from '@/plugins/insertImage'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
// Import translations for the German language.
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import List from '@ckeditor/ckeditor5-list/src/list';

import SimpleBox from '@/plugins/simplebox/simplebox'

export default {
  name: 'Editor',
  data() {
      return {
          documentEditor: DecoupledEditor,
          editor: ClassicEditor,
          editorData:`<p> content of the editor</p>
          <figure class="image">
           <img src="https://via.placeholder.com/1000x300/02c7cd/fff?text=Placeholder%20image" alt="CKEditor 5 rocks!">
          </figure>
          <section class="simple-box">
                <h1 class="simple-box-title">Box title</h1>
                <div class="simple-box-description">
                    <p>The description goes here.</p>
                    <ul>
                        <li>It can contain lists,</li>
                        <li>and other block elements like headings.</li>
                    </ul>
                </div>
            </section>
          `,
          editorConfig: {
              language:'zh-cn',
              plugins:[
                  TodoList,
                  List,
                    EssentialsPlugin,
                        BoldPlugin,
                        ItalicPlugin,
                        LinkPlugin,
                        ParagraphPlugin,
                        Emoji,
                        Image,
                        InsterImage,
                        ImageCaption,
                        SimpleBox
                        ],
            emoji: [
                        { name: 'smile', text: '😀' },
                        { name: 'wink', text: '😉' },
                        { name: 'cool', text: '😎' },
                        { name: 'surprise', text: '😮' },
                        { name: 'confusion', text: '😕' },
                        { name: 'crying', text: '😢' }
                    ],                        
              toolbar:{
                  items:['todoList',
                             'bold',
                            'italic',
                            'link',
                            'undo',
                            'redo',
                             'numberedList', 'bulletedList',
                            'emoji',
                            'insertImage'
                            ]
              }
          }
      }
  },
  methods:{
      onReady(editor) {
          CKEditorInspector.attach( editor )
          editor.ui.getEditableElement().parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
          )
      },
      onEditorFocus(){
          console.log('focus');
      },
      onEditorInput(){
        console.log('input...');
      },
      onEditorBlur(){
          console.log('blur');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.simple-box{
    padding:10px;
    margin:1em 0;
    background:rgba(0,0,0,0.1);
    border:solid 1px hsl(0,0%,77%);
    border-radius:2px;
}

.simple-box-title,.simple-box-description{
    padding:10px;
    margin:0;
    background: #fff;
    border:solid 1px hsl(0,0%,77%)
}
.simple-box-title{
    margin-bottom:10px;
}
</style>