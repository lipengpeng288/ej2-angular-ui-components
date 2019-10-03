import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['addInfo', 'id', 'lock', 'objects', 'visible', 'zIndex'];
let outputs: string[] = [];
/**
 * Layers Directive
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layers>e-layer',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class LayerDirective extends ComplexBase<LayerDirective> {


    /** 
     * Defines the description of the layer 
     * 



     */
    public addInfo: any;
    /** 
     * Defines the id of a diagram layer

     */
    public id: any;
    /** 
     * Enables or disables editing objects in a particular layer

     */
    public lock: any;
    /** 
     * Defines the collection of the objects that are added to a particular layer



     */
    public objects: any;
    /** 
     * Enables or disables the visibility of objects in a particular layer

     */
    public visible: any;
    /** 
     * Defines the zOrder of the layer

     */
    public zIndex: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Layer Array Directive
 * @private
 */
@Directive({
    selector: 'ej-diagram>e-layers',
    queries: {
        children: new ContentChildren(LayerDirective)
    },
})
export class LayersDirective extends ArrayBase<LayersDirective> {
    constructor() {
        super('layers');
    }
}