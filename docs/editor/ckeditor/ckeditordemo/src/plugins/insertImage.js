import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
class InsterImage extends Plugin {
    init() {
        const editor = this.editor
        editor.ui.componentFactory.add('insertImage', locale=>{
            const view = new ButtonView(locale)

            view.set({
                label:'Insert image',
                icon: imageIcon,
                tooltip:true
            })
            // 点击图片按钮时执行
            view.on('execute', ()=>{
                const imageUrl = prompt('Image URL')
                console.log(imageUrl)
                editor.model.change(writer =>{
                    // 新建图片元素
                  const imageElement = writer.createElement('image', {
                      src:imageUrl
                  })
                  // 在当前选中内容中添加图片
                  editor.model.insertContent(imageElement, editor.model.document.selection)


                })


            })
            return view
        })
        console.log('InserImage was initialized');
    }
}
export default InsterImage