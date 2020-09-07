import Plugin from '@ckeditor/ckeditor5-core/src/plugin'

import SimpleBoxEditing from './simpleboxediting'
import SimpleBoxUI from './simpleboxui'
export default class SimpBox extends Plugin{
    static get requires() {
        return [SimpleBoxEditing, SimpleBoxUI]
    }
}