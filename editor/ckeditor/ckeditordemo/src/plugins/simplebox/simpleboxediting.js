import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import {toWidget, toWidgetEditable} from '@ckeditor/ckeditor5-widget/src/utils'
import Widget from '@ckeditor/ckeditor5-widget/src/widget'
export default class SimpleBoxEditing extends Plugin{
    static get requires(){
        return [Widget]
    }
    init() {
        console.log('SimpleBoxEditing#init() got called');
        this._defineSchema()
        this._defineCoverters()
    }

    _defineSchema() {
        const schema = this.editor.model.schema
        schema.register('simpleBox',{
            isObject: true,
            allowWhere:'$block'
        })

        schema.register('simpleBoxTitle',{
            isLimit: true,
            allowIn:'simpleBox',
            allowContentOf: '$block'
        })

        schema.register('simpleBoxDescription',{
            isLimit: true,
            allowIn:'simpleBox',
            allowContentOf:'$root'
        })
    }

    /**
     * 转换器
     */
    _defineCoverters() {
      const conversion = this.editor.conversion
    //   conversion.elementToElement({
    //       model:'simpleBox',
    //       view:{
    //           name:'section',
    //           classes:'simple-box'
    //       }
    //   })

    //   conversion.elementToElement({
    //       model:'simpleBoxTitle',
    //       view:{
    //           name: 'h1',
    //           classes:'simple-box-title'
    //       }
    //   })

    //   conversion.elementToElement({
    //       model:'simpleBoxDescription',
    //       view: {
    //           name:'div',
    //           classes:'simple-box-description'
    //       }
    //   })

    // widget
    conversion.for('upcast').elementToElement({
        model:'simpleBox',
        view:{
            name:'section',
            classes:'simple-box'
        }
    })

    conversion.for('dataDowncast').elementToElement({
        model:'simpleBox',
        view:{
            name:'section',
            classes:'simple-box'
        }
    })
    // TODO: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-a-block-widget.html#demo
    conversion.for('editingDowncast').elementToElement({
        model:'simpleBox',
        view:(modelElement, {writer: viewWriter}) => {

        }
    })
    }
}