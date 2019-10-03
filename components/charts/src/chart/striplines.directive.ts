import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['border', 'color', 'dashArray', 'end', 'horizontalAlignment', 'isRepeat', 'isSegmented', 'opacity', 'repeatEvery', 'repeatUntil', 'rotation', 'segmentAxisName', 'segmentEnd', 'segmentStart', 'size', 'sizeType', 'start', 'startFromAxis', 'text', 'textStyle', 'verticalAlignment', 'visible', 'zIndex'];
let outputs: string[] = [];
/**
 * StripLine Directive
 * ```html
 * <e-axis>
 * <e-striplines>
 * <e-stripline></e-stripline>
 * </e-striplines>
 * </e-axis>
 * ```
 */
@Directive({
    selector: 'e-axis>e-striplines>e-stripline',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class StripLineDirective extends ComplexBase<StripLineDirective> {


    /** 
     * Border of the strip line.
     */
    public border: any;
    /** 
     * Color of the strip line.

     */
    public color: any;
    /** 
     * Dash Array of the strip line.


     */
    public dashArray: any;
    /** 
     * End value of the strip line.


     */
    public end: any;
    /** 
     * Defines the position of the strip line text horizontally. They are, 
     * * Start: Places the strip line text at the start. 
     * * Middle: Places the strip line text in the middle. 
     * * End: Places the strip line text at the end.

     */
    public horizontalAlignment: any;
    /** 
     * isRepeat value of the strip line.


     */
    public isRepeat: any;
    /** 
     * isSegmented value of the strip line


     */
    public isSegmented: any;
    /** 
     * Strip line Opacity

     */
    public opacity: any;
    /** 
     * repeatEvery value of the strip line.


     */
    public repeatEvery: any;
    /** 
     * repeatUntil value of the strip line.


     */
    public repeatUntil: any;
    /** 
     * The angle to which the strip line text gets rotated.


     */
    public rotation: any;
    /** 
     * segmentAxisName of the strip line.


     */
    public segmentAxisName: any;
    /** 
     * segmentEnd value of the strip line.


     */
    public segmentEnd: any;
    /** 
     * segmentStart value of the strip line.


     */
    public segmentStart: any;
    /** 
     * Size of the strip line, when it starts from the origin.


     */
    public size: any;
    /** 
     * Size type of the strip line

     */
    public sizeType: any;
    /** 
     * Start value of the strip line.


     */
    public start: any;
    /** 
     *  If set true, strip line get render from axis origin. 

     */
    public startFromAxis: any;
    /** 
     * Strip line text.

     */
    public text: any;
    /** 
     * Options to customize the strip line text.
     */
    public textStyle: any;
    /** 
     * Defines the position of the strip line text vertically. They are, 
     * * Start: Places the strip line text at the start. 
     * * Middle: Places the strip line text in the middle. 
     * * End: Places the strip line text at the end.

     */
    public verticalAlignment: any;
    /** 
     * If set true, strip line for axis renders.

     */
    public visible: any;
    /** 
     * Specifies the order of the strip line. They are, 
     * * Behind: Places the strip line behind the series elements. 
     * * Over: Places the strip line over the series elements.

     */
    public zIndex: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * StripLine Array Directive
 * @private
 */
@Directive({
    selector: 'e-axis>e-striplines',
    queries: {
        children: new ContentChildren(StripLineDirective)
    },
})
export class StripLinesDirective extends ArrayBase<StripLinesDirective> {
    constructor() {
        super('striplines');
    }
}